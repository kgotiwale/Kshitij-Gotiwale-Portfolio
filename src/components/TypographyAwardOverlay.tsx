'use client';

import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/swiper-bundle.css';

interface TypographyAwardOverlayProps {
  onClose: () => void;
}

const IMAGES: string[] = [
  '/images/typography/slide-1.jpg',
  '/images/typography/slide-2.jpg',
];

export function TypographyAwardOverlay({ onClose }: TypographyAwardOverlayProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    setMounted(true);
    const raf = requestAnimationFrame(() => setVisible(true));
    document.documentElement.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setVisible(false); setTimeout(onClose, 380); }
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 380);
  };

  if (!mounted) return null;

  const total = IMAGES.length;

  return createPortal(
    <>
      <style>{`
        .award-overlay {
          position: fixed;
          inset: 0;
          background-color: #0A0A0A;
          z-index: 999999;
          overflow-y: auto;
          overscroll-behavior: contain;
          transform: translateY(100%);
          opacity: 0;
          transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1), opacity 280ms ease;
        }
        .award-overlay--visible {
          transform: translateY(0);
          opacity: 1;
        }
        .award-close-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          pointer-events: none;
        }
        .award-close-btn {
          pointer-events: all;
          background: none;
          border: none;
          color: #F9F9F9;
          font-family: var(--font-rm-neue);
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
        }
        .award-content {
          position: relative;
        }
        .award-hero {
          padding: clamp(100px, 14vw, 200px) clamp(48px, 13vw, 190px) 60px;
        }
        .award-title {
          font-family: var(--font-rm-neue-vf);
          font-size: clamp(36px, 6.2vw, 90px);
          font-weight: 520;
          color: #F9F9F9;
          letter-spacing: -0.5px;
          line-height: 1.05;
          text-transform: uppercase;
          margin: 0 0 24px;
          text-align: center;
        }
        .award-subtitle {
          font-family: var(--font-rm-neue);
          font-size: clamp(13px, 1.2vw, 17px);
          font-weight: 400;
          color: rgb(111, 114, 111);
          margin: 0;
          letter-spacing: 0;
          text-align: center;
        }
        .award-image-section {
          padding: 0 clamp(48px, 13vw, 190px) 30px;
        }
        .award-slider-wrap {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .award-swiper {
          width: 100%;
        }
        .award-swiper .swiper-slide img {
          width: 100%;
          height: auto;
          display: block;
        }
        .award-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          align-items: center;
          background-color: #262626;
          border: none;
          border-radius: 2px;
          color: #F9F9F9;
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          padding: 12px;
        }
        .award-arrow--prev { left: 16px; }
        .award-arrow--next { right: 16px; }
        .award-arrow svg {
          color: #F9F9F9;
          fill: #F9F9F9;
          width: 9px;
          height: 8px;
        }
        .award-arrow:disabled {
          opacity: 0.2;
          cursor: default;
        }
        .award-counter {
          font-family: var(--font-rm-neue);
          font-size: 14px;
          font-weight: 400;
          color: rgb(111, 114, 111);
          letter-spacing: 0.05em;
          text-align: left;
          margin-top: 12px;
        }
        .award-text-section {
          padding: 50px clamp(48px, 13vw, 190px) 130px;
        }
        .award-section-heading {
          font-family: var(--font-rm-neue-vf);
          font-size: clamp(26px, 4.86vw, 70px);
          font-weight: 400;
          color: #F9F9F9;
          text-transform: uppercase;
          letter-spacing: -0.35px;
          line-height: 1.05;
          margin: 0 0 40px;
        }
        .award-text-right p {
          font-family: var(--font-rm-neue);
          font-size: 20px;
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.1px;
          color: #F9F9F9;
          margin-bottom: 1.2em;
        }

        @media (max-width: 768px) {
          .award-hero { padding: 88px 20px 48px; }
          .award-image-section { padding: 0 20px 24px; }
          .award-text-section { padding: 36px 20px 80px; }
        }
      `}</style>

      <div
        className={`award-overlay${visible ? ' award-overlay--visible' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Fixed close bar */}
        <div className="award-close-bar">
          <button className="award-close-btn" onClick={handleClose}>
            CLOSE ×
          </button>
        </div>

        {/* Scrollable content */}
        <div className="award-content">

          {/* Hero */}
          <div className="award-hero">
            <h1 className="award-title">Best in Typography</h1>
            <p className="award-subtitle">School of Design | University of Illinois at Chicago, 2022</p>
          </div>

          {/* Slider */}
          <div className="award-image-section">
            <div className="award-slider-wrap">
              {total > 1 && (
                <button
                  className="award-arrow award-arrow--prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Previous"
                >
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 8">
                    <path d="M8.447 4.772H2.495l2.592 2.64H3.443L.575 4.532v-.744L3.443.92h1.644L2.495 3.572h5.952v1.2Z" fill="currentColor" />
                  </svg>
                </button>
              )}

              <div className="award-swiper">
                <Swiper
                  modules={[Navigation]}
                  loop={false}
                  onSwiper={(swiper) => { swiperRef.current = swiper; }}
                  onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
                >
                  {IMAGES.map((src, i) => (
                    <SwiperSlide key={src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={`Slide ${i + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {total > 1 && (
                  <div className="award-counter">{current + 1} / {total}</div>
                )}
              </div>

              {total > 1 && (
                <button
                  className="award-arrow award-arrow--next"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Next"
                >
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 8" style={{ transform: 'scaleX(-1)' }}>
                    <path d="M8.447 4.772H2.495l2.592 2.64H3.443L.575 4.532v-.744L3.443.92h1.644L2.495 3.572h5.952v1.2Z" fill="currentColor" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Text */}
          <div className="award-text-section">
            <div className="text-col">
              <div className="text-col__left" />
              <div className="award-text-right text-col__right text-col__content">
<p>
                  Two awards from the UIC School of Design Year End Show 2022 — Best in Typography and Best in Contemporary Practice. Signed by Sharon Oiga, Chair of Graphic Design, and Marcia Lausen, Director. For the project As You Gaze Upon Her.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>,
    document.body
  );
}
