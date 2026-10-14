import { ChevronRight, Plus } from 'lucide-react';
import { common } from '@/config/site/uk/common';
import { ROUTES, type RouteKey } from '@/config/site/routes';

/** Resolves a route key from page copy to its path. */
export function href(route: string): string {
  const r = ROUTES[route as RouteKey];
  if (!r) throw new Error(`Unknown route key in site copy: ${route}`);
  return r.path;
}

type AssetId = keyof Omit<typeof common.assets, 'demoNote' | 'placeholderNote'>;

/**
 * Frame for a product screenshot. Until the A01–A08 assets with training data
 * exist, it renders a labelled placeholder rather than an invented screen.
 */
export function ScreenFrame({ asset, ratio = '16 / 10', size = 'md' }: { asset: string; ratio?: string; size?: 'sm' | 'md' }) {
  const a = common.assets[asset as AssetId];
  return (
    <figure className={`sf-frame sf-frame--${size}`}>
      <div className="sf-frame-bar" aria-hidden>
        <span /><span /><span />
      </div>
      <div className="sf-frame-body" style={{ aspectRatio: ratio }} role="img" aria-label={a.alt}>
        <span className="sf-frame-id">{asset}</span>
        <span className="sf-frame-title">{a.title}</span>
        <span className="sf-frame-note">{common.assets.placeholderNote}</span>
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
