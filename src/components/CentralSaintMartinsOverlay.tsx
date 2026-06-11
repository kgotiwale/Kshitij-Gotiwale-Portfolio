'use client';

import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/swiper-bundle.css';

interface CentralSaintMartinsOverlayProps {
  onClose: () => void;
}

const IMAGES: string[] = [
  '/images/csm-award/slide-2.png',
  '/images/csm-award/slide-1.png',
];

export function CentralSaintMartinsOverlay({ onClose }: CentralSaintMartinsOverlayProps) {
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
        .csm-overlay {
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
        .csm-overlay--visible {
          transform: translateY(0);
          opacity: 1;
        }
        .csm-close-bar {
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
        .csm-close-btn {
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
        .csm-content {
          position: relative;
        }
        .csm-hero {
          padding: clamp(100px, 14vw, 200px) clamp(48px, 13vw, 190px) 60px;
        }
        .csm-title {
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
        .csm-subtitle {
          font-family: var(--font-rm-neue);
          font-size: clamp(13px, 1.2vw, 17px);
          font-weight: 400;
          color: rgb(111, 114, 111);
          margin: 0;
          letter-spacing: 0;
          text-align: center;
        }
        .csm-image-section {
          padding: 0 clamp(48px, 13vw, 190px) 30px;
        }
        .csm-slider-wrap {
          max-width: 560px;
          margin: 0 auto;
          position: relative;
        }
        .csm-swiper {
          width: 100%;
        }
        .csm-swiper .swiper-slide img {
          width: 100%;
          height: auto;
          display: block;
        }
        .csm-arrow {
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
        .csm-arrow--prev { left: 16px; }
        .csm-arrow--next { right: 16px; }
        .csm-arrow svg {
          color: #F9F9F9;
          fill: #F9F9F9;
          width: 9px;
          height: 8px;
        }
        .csm-arrow:disabled {
          opacity: 0.2;
          cursor: default;
        }
        .csm-counter {
          font-family: var(--font-rm-neue);
          font-size: 14px;
          font-weight: 400;
          color: rgb(111, 114, 111);
          letter-spacing: 0.05em;
          text-align: left;
          margin-top: 12px;
        }
        .csm-text-section {
          padding: 50px clamp(48px, 13vw, 190px) 130px;
        }
        .csm-text-right p {
          font-family: var(--font-rm-neue);
          font-size: 20px;
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.1px;
          color: #F9F9F9;
          margin-bottom: 1.2em;
        }

        @media (max-width: 768px) {
          .csm-hero { padding: 88px 20px 48px; }
          .csm-image-section { padding: 0 20px 24px; }
          .csm-text-section { padding: 36px 20px 80px; }
        }
      `}</style>

      <div
        className={`csm-overlay${visible ? ' csm-overlay--visible' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="csm-close-bar">
          <button className="csm-close-btn" onClick={handleClose}>
            CLOSE ×
          </button>
        </div>

        <div className="csm-content">

          <div className="csm-hero">
            <h1 className="csm-title">Central Saint Martins Award</h1>
            <p className="csm-subtitle">2024</p>
          </div>

          <div className="csm-image-section">
            <div className="csm-slider-wrap">
              {total > 1 && (
                <button
                  className="csm-arrow csm-arrow--prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Previous"
                >
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 8">
                    <path d="M8.447 4.772H2.495l2.592 2.64H3.443L.575 4.532v-.744L3.443.92h1.644L2.495 3.572h5.952v1.2Z" fill="currentColor" />
                  </svg>
                </button>
              )}

              <div className="csm-swiper">
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
                  <div className="csm-counter">{current + 1} / {total}</div>
                )}
              </div>

              {total > 1 && (
                <button
                  className="csm-arrow csm-arrow--next"
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

          <div className="csm-text-section">
            <div className="text-col">
              <div className="text-col__left" />
              <div className="csm-text-right text-col__right text-col__content">
                <p>
                  12:40 was recognised with the GCD as… Re-contextualisation award at Central Saint Martins' MA Graphic Communication Design (2024), a nod to the way the project re-contextualises Latin, Devanagari and Urdu into a single digital letterset. The work was exhibited at the CSM degree show and featured by Dean Rathna Ramanathan, herself a leading voice in multilingual design, in her pick of the show's standout pieces.
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
