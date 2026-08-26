import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';
import { SITE } from '@/config/seo';

export const runtime = 'nodejs';

const DEFAULT_TITLE = 'hirnix — CRM для сфери послуг';
const DEFAULT_SUBTITLE = 'Онлайн-запис 24/7 для салонів краси і майстрів';

let logoDataUri: string | undefined;
function getLogoDataUri() {
  if (!logoDataUri) {
    const buf = readFileSync(join(process.cwd(), 'public', 'icon-512.png'));
    logoDataUri = `data:image/png;base64,${buf.toString('base64')}`;
  }
  return logoDataUri;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? DEFAULT_TITLE;
  const subtitle = searchParams.get('subtitle') ?? DEFAULT_SUBTITLE;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#0F3B2B',
          backgroundImage:
            'radial-gradient(circle at 8% 8%, rgba(47,143,107,0.55) 0%, rgba(15,59,43,0) 45%), radial-gradient(circle at 96% 90%, rgba(23,105,76,0.65) 0%, rgba(15,59,43,0) 50%)',
          fontFamily: '"Segoe UI", Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={getLogoDataUri()} width={72} height={72} style={{ borderRadius: 18 }} alt="" />
          <span style={{ fontSize: 34, fontWeight: 700, color: '#FAFAF7', letterSpacing: '-0.01em' }}>
            hirnix
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 980 }}>
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FAFAF7',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </span>
          <span style={{ fontSize: 28, fontWeight: 400, lineHeight: 1.4, color: '#CFEBDD' }}>
            {subtitle}
          </span>
        </div>

        <div style={{ display: 'flex', fontSize: 22, color: '#8FCBB2', fontWeight: 500 }}>
          {SITE.url.replace('https://', '')}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
