'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about_me' },
  { label: 'WORK', href: '/work' },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const activeBg = 'rgb(10, 10, 10)';
  const activeColor = 'rgb(249, 249, 249)';
  const inactiveColor = 'rgba(249, 249, 249, 0.7)';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'var(--nav-bottom)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <nav style={{ pointerEvents: 'auto' }}>
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
            margin: 0,
            padding: '4px',
            gap: '4px',
            backgroundColor: 'rgba(63, 65, 60, 0.5)',
            backdropFilter: 'blur(7.5px)',
            WebkitBackdropFilter: 'blur(7.5px)',
            borderRadius: '4px',
          }}
        >
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    display: 'block',
                    color: isActive ? activeColor : inactiveColor,
                    fontFamily: 'var(--font-rm-neue), "RMNeue", sans-serif',
                    fontSize: '12px',
                    fontWeight: 520,
                    letterSpacing: '0.12px',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    padding: '8px 12px',
                    borderRadius: '2px',
                    backgroundColor: isActive ? activeBg : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = activeBg;
                      e.currentTarget.style.color = activeColor;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = inactiveColor;
                    }
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
