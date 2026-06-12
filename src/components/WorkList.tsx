'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSuperHoverRef } from 'super-hover/react';
import { TypographyAwardOverlay } from '@/components/TypographyAwardOverlay';
import { CentralSaintMartinsOverlay } from '@/components/CentralSaintMartinsOverlay';
import { MotionReelsOverlay } from '@/components/MotionReelsOverlay';

interface Project {
  year: string;
  title: string;
  href: string;
  category?: string;
  overlay?: string;
  hoverImage?: string;
}

const projects: Project[] = [
  { year: '2026', title: 'Resolute',                    href: '#',                               category: 'Coming Soon' },
  { year: '2026', title: 'Types & Faces Talk',          href: '#',                               category: 'Coming Soon' },
  { year: '2026', title: 'Audit for LifeSciences',      href: '/project/audit-for-lifesciences', category: 'Product Design', hoverImage: '/images/work/audit-hover.png' },
  { year: '2026', title: 'Dr Donato',                  href: '/project/dr-donato',             category: 'Branding', hoverImage: '/images/work/dr-donato-hover.png' },
  { year: '2026', title: 'Agentic Design System',       href: '/project/agentic-design-system',  category: 'Case-Study', hoverImage: '/images/work/agentic-hover.png' },
  { year: '2026', title: "It'sNiceThat Feature",        href: 'https://www.itsnicethat.com/articles/kshitij-gotiwale-1240-graphic-design-project-161025', hoverImage: '/images/work/project-1240-hover.png' },
  { year: '2026', title: 'Provantis 13',                href: '/project/provantis-13',           category: 'Product Design', hoverImage: '/images/work/provantis-hover.png' },
  { year: '2026', title: 'Al Makhilah',                 href: '/project/al-makhilah',            category: 'Branding', hoverImage: '/images/work/al-makhilah-hover.png' },
  { year: '2025', title: 'Project 12:40',               href: '/project/project-1240',           category: 'Typeface', hoverImage: '/images/work/project-1240-hover-v2.png' },
  { year: '2025', title: 'Aji Press Vol 1 Feature',     href: 'https://magculture.com/products/aji-3', hoverImage: '/images/work/aji-press-hover.png' },
  { year: '2025', title: 'Behno New York',              href: '/project/behno-new-york',         category: 'Branding', hoverImage: '/images/behno/herobg.png' },
  { year: '2025', title: 'Shuwa',                       href: '/project/shuwa',                  category: 'Branding', hoverImage: '/images/work/shuwa-hover.png' },
  { year: '2025', title: 'In Their Wake',               href: '/project/in-their-wake',          category: 'Editorial', hoverImage: '/images/work/in-their-wake-hover.jpg' },
  { year: '2024', title: 'Central Saint Martins Award', href: '#', overlay: 'csm-award', hoverImage: '/images/csm-award/hover.png' },
  { year: '2024', title: 'Subko Speciality Coffee',     href: '/project/subko',                  category: 'Branding', hoverImage: '/images/work/subko-hover.jpg' },
  { year: '2024', title: 'As You Gaze Upon Her',        href: '/project/as-you-gaze-upon-her',   category: 'Editorial', hoverImage: '/images/as-you-gaze-upon-her/herobg.png' },
  { year: '2024', title: 'Motion Reels',                href: '#', overlay: 'motion-reels', hoverImage: '/images/motion-reels/hover.gif' },
  { year: '2022', title: 'Best in Typography, School of Design | University of Illinois at Chicago, 2022', href: '#', overlay: 'typography-award', hoverImage: '/images/typography/slide-2.jpg' },
];

// Mulberry32: integer-only PRNG, bit-identical across JS engines.
// Math.sin is implementation-defined and differed between Node (SSR)
// and the browser, causing hydration mismatches on the sticker angles.
function seededRandom(seed: number): number {
  let t = (seed + 1 + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

const ROTATIONS = projects.map((_, i) => -12 + seededRandom(i) * 23);

export function WorkList() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [hoverImage, setHoverImage] = useState('/images/hover-preview.jpg');
  const [isMobile, setIsMobile] = useState(false);
  const [awardOpen, setAwardOpen] = useState(false);
  const [csmOpen, setCsmOpen] = useState(false);
  const [motionReelsOpen, setMotionReelsOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const rootRef = useSuperHoverRef({
    enabled: !isMobile,
    onEnter() { setActive(true); },
    onLeave() { setActive(false); },
    onMove(e) { setPos({ x: e.detail.x, y: e.detail.y }); },
  });

  return (
    <>
      <style>{`
        .work-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 8px 48px;
          border-top: 1px solid rgb(228, 229, 227);
          text-decoration: none;
        }
        .work-row:last-child {
          border-bottom: 1px solid rgb(228, 229, 227);
        }
        .work-item-text {
          font-size: clamp(16px, 4.16vw, 40px);
          line-height: 1.2;
        }
        .work-text {
          color: #0A0A0A;
        }
        .work-text--muted {
          color: rgba(10, 10, 10, 0.35);
        }
        .work-row-link[data-super-hover-active] .work-text {
          color: rgba(10, 10, 10, 0.28);
        }
        .work-row-link[data-super-hover-active] .work-sticker p {
          color: rgba(10, 10, 10, 0.28);
        }
        .work-year-col {
          width: clamp(80px, 17vw, 164px);
          flex-shrink: 0;
        }
        @media (max-width: 640px) {
          .work-row { padding: 8px 20px; }
          .work-item-text { font-size: 24px; }
          .work-year-col { width: 74px; }
          .work-sticker p { font-size: 12px !important; }
          .work-sticker { padding: 3px 6px; }
        }

        .work-sticker {
          background-color: rgb(253, 190, 104);
          border-radius: 4px;
          display: inline-block;
          padding: 4px 8px;
          text-transform: uppercase;
          transform: rotate(var(--rotation-angle));
          -webkit-transform: rotate(var(--rotation-angle));
          flex-shrink: 0;
        }
        .work-sticker--muted {
          background-color: rgba(0, 0, 0, 0.08);
        }
        .work-sticker--case-study {
          background-color: #474747;
        }
        .work-sticker.work-sticker--case-study p {
          color: #F0F0F0;
        }
        .work-sticker p {
          margin: 0;
          font-family: var(--font-rm-neue);
          font-size: 18px;
          font-style: normal;
          font-weight: 520;
          line-height: normal;
          letter-spacing: 0.18px;
          text-transform: uppercase;
          color: #0A0A0A;
        }

        @media (max-width: 768px) {
          .work-hover-image { display: none !important; }
        }
        .work-hover-image {
          position: fixed;
          right: 72px;
          pointer-events: none;
          z-index: 1000;
          width: clamp(220px, 24vw, 380px);
          opacity: 0;
          transition: opacity 120ms ease;
        }
        .work-hover-image.visible {
          opacity: 1;
        }
        .work-hover-image img {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>

      <div
        className={`work-hover-image${active ? ' visible' : ''}`}
        style={{ top: pos.y, transform: 'translateY(-50%)' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hoverImage} alt="" />
      </div>

      <section ref={rootRef} className="work-list" style={{ backgroundColor: '#F9F9F9', paddingTop: 'clamp(100px, 14vw, 200px)', paddingBottom: 'clamp(48px, 6vw, 96px)' }}>
        {projects.map((project, i) => {
          const isComingSoon = project.category === 'Coming Soon';
          const inner = (
            <>
              {/* Year */}
              <div className="work-year-col">
                <span className={`work-item-text work-text${isComingSoon ? ' work-text--muted' : ''}`} style={{
                  fontFamily: 'var(--font-ot-jubilee)',
                  fontWeight: 400,
                  letterSpacing: '-0.2px',
                  fontFeatureSettings: '"dlig"',
                }}>
                  {project.year}
                </span>
              </div>

              {/* Title + sticker */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className={`work-item-text work-text${isComingSoon ? ' work-text--muted' : ''}`} style={{
                  fontFamily: 'var(--font-rm-neue-vf)',
                  fontWeight: 400,
                  letterSpacing: '-0.2px',
                  fontFeatureSettings: '"dlig"',
                }}>
                  {project.title}
                </span>
                {project.category && (
                  <div
                    className={`work-sticker${isComingSoon ? ' work-sticker--muted' : ''}${project.category === 'Case-Study' ? ' work-sticker--case-study' : ''}`}
                    style={{
                      '--rotation-angle': `${ROTATIONS[i]}deg`,
                      ...(project.category === 'Product Design' && { backgroundColor: '#9CE781' }),
                      ...(project.category === 'Typeface' && { backgroundColor: '#B5B0D8' }),
                      ...(project.category === 'Editorial' && { backgroundColor: '#FF9B9D' }),
                    } as React.CSSProperties}
                  >
                    <p>{project.category}</p>
                  </div>
                )}
              </div>
            </>
          );

          const isExternal = project.href.startsWith('http');

          const handleMouseEnter = project.hoverImage
            ? () => setHoverImage(project.hoverImage!)
            : () => setHoverImage('/images/hover-preview.jpg');

          if (project.overlay) {
            const openOverlay = () => {
              if (project.overlay === 'csm-award') setCsmOpen(true);
              else if (project.overlay === 'motion-reels') setMotionReelsOpen(true);
              else setAwardOpen(true);
            };
            return (
              <div
                key={project.title}
                className="work-row work-row-link"
                data-super-hover
                style={{ cursor: 'pointer' }}
                onClick={openOverlay}
                onMouseEnter={handleMouseEnter}
              >
                {inner}
              </div>
            );
          }

          return project.href === '#' ? (
            <div key={project.title} className="work-row" style={{ cursor: 'default' }}>
              {inner}
            </div>
          ) : isExternal ? (
            <a key={project.href} href={project.href} target="_blank" rel="noopener noreferrer" className="work-row work-row-link" data-super-hover onMouseEnter={handleMouseEnter}>
              {inner}
            </a>
          ) : (
            <Link key={project.href} href={project.href} className="work-row work-row-link" data-super-hover onMouseEnter={handleMouseEnter}>
              {inner}
            </Link>
          );
        })}
      </section>

      {awardOpen && <TypographyAwardOverlay onClose={() => setAwardOpen(false)} />}
      {csmOpen && <CentralSaintMartinsOverlay onClose={() => setCsmOpen(false)} />}
      {motionReelsOpen && <MotionReelsOverlay onClose={() => setMotionReelsOpen(false)} />}
    </>
  );
}
