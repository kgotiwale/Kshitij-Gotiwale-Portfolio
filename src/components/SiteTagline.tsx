'use client';

import { usePathname } from 'next/navigation';

export function SiteTagline() {
  const pathname = usePathname();
  if (pathname === '/') return null;
  return (
    <div className="sc--header-headline">
      <p className="sc--header-headline--text">
        PUTTING &ldquo;DISCO&rdquo; IN DISCONNECTING FROM REALITY
      </p>
    </div>
  );
}
