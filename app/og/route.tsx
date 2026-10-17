import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';

const DEFAULT_TAGLINE = '24/7 запис і адміністрування вашого салону';

// Superset of characters the OG image ever needs to render (default taglines +
// safe alphabet/punctuation), so the subset font fetched below covers any
// tagline passed in without re-fetching per request.
const FONT_TEXT =
  '0123456789/—-,.!?\' ' +
  'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгґдежзиіїйклмнопрстуфхцчшщьюяʼ' +
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' +
  'ÁČĎÉĚÍŇÓŘŠŤÚŮÝŽáčďéěíňóřšťúůýžÄÖÜäöüß’&:';

let logoDataUri: string | undefined;
function getLogoDataUri() {
  if (!logoDataUri) {
    const buf = readFileSync(join(process.cwd(), 'public', 'icon-512.png'));
    logoDataUri = `data:image/png;base64,${buf.toString('base64')}`;
  }
  return logoDataUri;
}

async function fetchManropeExtraBold(): Promise<ArrayBuffer> {
  const cssUrl = new URL('https://fonts.googleapis.com/css2');
  cssUrl.searchParams.set('family', 'Manrope:wght@800');
  cssUrl.searchParams.set('text', FONT_TEXT);
  const css = await fetch(cssUrl, {
    // Google only serves a single combined .ttf (instead of several woff2
    // files split by unicode-range) to crawler-class user agents.
    headers: { 'User-Agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)' },
  }).then((res) => res.text());
  const match = css.match(/src: url\(([^)]+)\)/);
  if (!match) throw new Error('Could not resolve Manrope font URL');
  const fontResponse = await fetch(match[1]);
  return fontResponse.arrayBuffer();
}

let manropeExtraBold: Promise<ArrayBuffer> | undefined;
function getManropeExtraBold(): Promise<ArrayBuffer> {
  if (!manropeExtraBold) manropeExtraBold = fetchManropeExtraBold();
  return manropeExtraBold;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tagline = searchParams.get('tagline') ?? DEFAULT_TAGLINE;
  const font = await getManropeExtraBold();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 56,
          backgroundColor: '#010101',
          backgroundImage:
            'radial-gradient(circle at 50% 36%, #2F8F6B 0%, rgba(15,59,43,0.55) 32%, rgba(1,1,1,0) 62%)',
          fontFamily: '"Manrope"',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={getLogoDataUri()} width={168} height={168} style={{ borderRadius: 38 }} alt="" />
        <span
          style={{
            display: 'flex',
            maxWidth: 700,
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 40,
            fontWeight: 800,
            lineHeight: 1.4,
            color: '#F2F1EA',
            letterSpacing: '-0.01em',
          }}
        >
          {tagline}
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Manrope', data: font, weight: 800, style: 'normal' }],
    }
  );
}
