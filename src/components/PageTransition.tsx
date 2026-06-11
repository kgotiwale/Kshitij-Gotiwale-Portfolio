'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fade in on every route change
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    el.classList.remove('fade-out');
    // Re-trigger animation by removing and re-adding the class
    el.style.animation = 'none';
    el.style.opacity = '0';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.animation = '';
        el.classList.add('page-transition-wrapper');
      });
    });
  }, [pathname]);

  // Intercept link clicks for fade-out
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
      if (target.getAttribute('target') === '_blank') return;

      e.preventDefault();
      el.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = href;
      }, 200);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Restore fade-in when page is shown from bfcache (browser back/forward)
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        el.classList.remove('fade-out');
        el.style.animation = 'none';
        el.style.opacity = '1';
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  // ESC key → go back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        window.history.back();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={wrapperRef} className="page-transition-wrapper">
      {children}
    </div>
  );
}
