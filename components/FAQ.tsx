'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { FAQT } from '@/config/i18n/types';

interface Props { t: FAQT }

export function FAQ({ t }: Props) {
  const [open, setOpen] = useState(-1);

  return (
    <section className="section section-soft" id="faq">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />{t.eyebrow}</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              {t.h2.pre}
              {t.h2.mid && <><br />{t.h2.mid}</>}
            </h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="faq-list">
          {t.items.map((it, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="faq-q-text">{it.q}</span>
                <span className="faq-q-icon">
                  <Plus size={16} strokeWidth={2.2} />
                </span>
              </button>
              {open === i && <p className="faq-a">{it.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
