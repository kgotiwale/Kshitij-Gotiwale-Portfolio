'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prevPathname = useRef(pathname);

  // Fade in on client-side route changes only — the initial load fade
  // is handled by the CSS animation on .page-transition-wrapper, and
  // re-triggering it after hydration causes a visible double flash.
  // Comparing pathnames (rather than a first-render flag) keeps this
  // correct under Strict Mode's double effect invocation in dev.
  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
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

    // Capture phase so preventDefault() runs before Next.js <Link>'s own
    // click handler — otherwise Link triggers a client-side navigation AND
    // the timeout below triggers a full reload, loading every page twice
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
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
