'use client';

import { useEffect, useRef, useState, Fragment } from 'react';

interface AnimatedTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ children, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const tick = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.8;
      const end = vh * 0.2;
      const total = start - end + r.height;
      const traveled = start - r.top;
      const p = Math.max(0, Math.min(1, traveled / total));
      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const words = children.split(' ');
  const n = words.length || 1;

  return (
    <span ref={ref} className={className} style={{ display: 'block', width: '100%', ...style }}>
      {words.map((word, i) => {
        const wordStart = i / n;
        const wordEnd = (i + 4) / n;
        const op = Math.max(
          0.55,
          Math.min(1, (progress - wordStart) / Math.max(0.0001, wordEnd - wordStart))
        );
        return (
          <Fragment key={i}>
            <span style={{ opacity: op, transition: 'opacity 150ms linear' }}>{word}</span>
            {i < words.length - 1 ? ' ' : ''}
          </Fragment>
        );
      })}
    </span>
  );
}
