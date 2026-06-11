'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface ProjectHeroProps {
  title: string;
  bgColor?: string;
  titleColor?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageMaxHeight?: string;
}

export function ProjectHero({
  title,
  bgColor = '#1a3f26',
  titleColor = '#ffffff',
  imageSrc,
  imageAlt,
  imageMaxHeight = '70vh',
}: ProjectHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!titleRef.current) return;
      const y = window.scrollY;
      if (y <= window.innerHeight) {
        titleRef.current.style.transform = `translateY(${y * -0.09}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        {imageSrc && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              width={989}
              height={1172}
              style={{
                height: 'auto',
                width: 'auto',
                maxHeight: imageMaxHeight,
                objectFit: 'contain',
                display: 'block',
              }}
              priority
            />
          </div>
        )}

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <h1
            ref={titleRef}
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 6.25vw, 90px)',
              fontWeight: 520,
              color: titleColor,
              letterSpacing: '-0.9px',
              textTransform: 'uppercase',
              margin: 0,
              lineHeight: 0.977,
              textAlign: 'center',
              willChange: 'transform',
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </>
  );
}
