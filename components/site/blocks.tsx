import Image from 'next/image';
import { ChevronRight, Plus } from 'lucide-react';
import { SITE_ASSETS, type AssetId, type SiteAsset } from '@/config/site/assets';
import { common } from '@/config/site/uk/common';
import { ROUTES, type RouteKey } from '@/config/site/routes';

/** Resolves a route key from page copy to its path. */
export function href(route: string): string {
  const r = ROUTES[route as RouteKey];
  if (!r) throw new Error(`Unknown route key in site copy: ${route}`);
  return r.path;
}

/**
 * Hands out each screenshot at most once per page. Create one picker per page
 * render and pass every asset through it: the first request for an id gets
 * it, repeats get undefined, so that block renders as text only.
 */
export function createAssetPicker() {
  const used = new Set<AssetId>();
  return (id?: AssetId): AssetId | undefined => {
    if (!id || used.has(id)) return undefined;
    used.add(id);
    return id;
  };
}

interface FrameProps {
  /** Missing (or already used on this page) → nothing is rendered. */
  asset?: AssetId;
  size?: 'sm' | 'md';
  /** Load eagerly — only for the screenshot in the first screen. */
  priority?: boolean;
  /** Rendered width hint for responsive image selection. */
  sizes?: string;
}

/**
 * Frame for a real product screenshot: a browser window for admin screens, a
 * phone for the client booking page. Renders nothing without an asset — the
 * site never shows invented screens or placeholders.
 */
export function ScreenFrame({ asset, size = 'md', priority, sizes = '(min-width: 960px) 60vw, 100vw' }: FrameProps) {
  if (!asset) return null;
  const shot: SiteAsset = SITE_ASSETS[asset];

  if (shot.device === 'phone') {
    return (
      <figure className={`sf-phone sf-phone--${size}`}>
        <div className="sf-phone-screen">
          <Image src={shot.src} width={shot.width} height={shot.height} alt={shot.alt} sizes="(min-width: 960px) 320px, 70vw" priority={priority} />
        </div>
        <figcaption className="sf-frame-caption">{common.assets.demoNote}</figcaption>
      </figure>
    );
  }

  // Tall dialogs (e.g. the service editor) are narrowed so they don't fill the screen.
  const portrait = shot.height > shot.width * 1.2;
  return (
    <figure className={`sf-frame sf-frame--${size} sf-frame--shot${portrait ? ' sf-frame--portrait' : ''}`}>
      <div className="sf-frame-bar" aria-hidden>
        <span /><span /><span />
      </div>
      <div className="sf-frame-img">
        <Image src={shot.src} width={shot.width} height={shot.height} alt={shot.alt} sizes={sizes} priority={priority} />
      </div>
      <figcaption className="sf-frame-caption">{common.assets.demoNote}</figcaption>
    </figure>
  );
}

export function SectionHead({ eyebrow, title, lead, id }: { eyebrow: string; title: string; lead?: string; id?: string }) {
  return (
    <div className="sx-head">
      <span className="eyebrow"><span className="dot" />{eyebrow}</span>
      <h2 className="sx-title" id={id}>{title}</h2>
      {lead && <p className="sx-lead">{lead}</p>}
    </div>
  );
}

/** FAQ on native <details>: works without JS and keeps answers in the HTML. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="sx-faq">
      {items.map((it) => (
        <details key={it.q} className="sx-faq-item">
          <summary>
            <span>{it.q}</span>
            <span className="sx-faq-icon" aria-hidden><Plus size={16} strokeWidth={2.2} /></span>
          </summary>
          <p>{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Навігаційний ланцюжок" className="sx-crumbs">
      <ol>
        {items.map((it, i) => (
          <li key={it.label}>
            {it.href ? <a href={it.href}>{it.label}</a> : <span aria-current="page">{it.label}</span>}
            {i < items.length - 1 && <ChevronRight size={14} aria-hidden />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
