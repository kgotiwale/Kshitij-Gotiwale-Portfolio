'use client';

import { useRef, useEffect } from 'react';

interface StripImage {
  src: string;
  alt: string;
  type?: 'image' | 'video';
}

export function HorizontalImageStrip({
  images,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  speed,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  reverse,
}: {
  images: StripImage[];
  speed?: number;
  reverse?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeftStart.current = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };
    const onMouseUp = () => {
      isDragging.current = false;
      el.style.cursor = 'grab';
    };
    const onMouseLeave = () => {
      isDragging.current = false;
      el.style.cursor = 'grab';
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      el.scrollLeft = scrollLeftStart.current - walk;
    };
    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mousemove', onMouseMove);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
    <style>{`
      .sc-image-strip img, .sc-image-strip video { height: 66vh; }
      @media (max-width: 768px) {
        .sc-image-strip img, .sc-image-strip video { height: 38vh; }
      }
    `}</style>
    <div
      ref={containerRef}
      className="sc-image-strip"
      style={{
        overflowX: 'scroll',
        overflowY: 'hidden',
        width: '100%',
        backgroundColor: '#f9f9f9',
        padding: '4px 0',
        cursor: 'grab',
        WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
        marginTop: '3rem',
        marginBottom: '3rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 30,
          width: 'max-content',
          padding: '0 30px',
        }}
      >
        {images.map((img, i) => {
          const isVideo = img.type === 'video' || img.src.endsWith('.mp4') || img.src.endsWith('.webm');
          const sharedStyle: React.CSSProperties = {
            width: 'auto',
            display: 'block',
            flexShrink: 0,
            objectFit: 'cover',
            pointerEvents: 'none',
            userSelect: 'none',
          };
          return isVideo ? (
            <video
              key={i}
              src={img.src}
              autoPlay
              loop
              muted
              playsInline
              draggable={false}
              style={sharedStyle}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              draggable={false}
              style={sharedStyle}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}
