'use client';

import Link from 'next/link';
import { PROJECTS } from '@/data/projects';

interface ProjectNavBarProps {
  currentHref: string;
}

export function ProjectNavBar({ currentHref }: ProjectNavBarProps) {
  const idx = PROJECTS.findIndex(p => p.href === currentHref);
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const labelStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: 'var(--font-rm-neue)',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: '-0.01em',
    color: active ? '#111' : 'rgba(0,0,0,0.25)',
    textDecoration: 'none',
    cursor: active ? 'pointer' : 'default',
    userSelect: 'none' as const,
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 32px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      {prev ? (
        <Link href={prev.href} style={labelStyle(true)}>Previous</Link>
      ) : (
        <span style={labelStyle(false)}>Previous</span>
      )}

      <button
        onClick={scrollToTop}
        style={{
          ...labelStyle(true),
          background: 'none',
          border: 'none',
          padding: 0,
          fontFamily: 'var(--font-rm-neue)',
        }}
      >
        Back To Top
      </button>

      {next ? (
        <Link href={next.href} style={labelStyle(true)}>Next</Link>
      ) : (
        <span style={labelStyle(false)}>Next</span>
      )}
    </div>
  );
}
