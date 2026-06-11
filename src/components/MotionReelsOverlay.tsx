'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface MotionReelsOverlayProps {
  onClose: () => void;
}

export function MotionReelsOverlay({ onClose }: MotionReelsOverlayProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const raf = requestAnimationFrame(() => setVisible(true));
    document.documentElement.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisible(false);
        setTimeout(onClose, 380);
      }
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

  return createPortal(
    <>
      <style>{`
        .reels-overlay {
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
        .reels-overlay--visible {
          transform: translateY(0);
          opacity: 1;
        }
        .reels-close-bar {
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
        .reels-close-btn {
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
        .reels-content {
          position: relative;
        }
        .reels-hero {
          padding: clamp(100px, 14vw, 200px) clamp(48px, 13vw, 190px) 60px;
        }
        .reels-title {
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
        .reels-subtitle {
          font-family: var(--font-rm-neue);
          font-size: clamp(13px, 1.2vw, 17px);
          font-weight: 400;
          color: rgb(111, 114, 111);
          margin: 0;
          letter-spacing: 0;
          text-align: center;
        }
        .reels-video-section {
          padding: 0 clamp(48px, 13vw, 190px) 30px;
        }
        .reels-video-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .reels-video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background-color: #262626;
          border-radius: 2px;
          overflow: hidden;
        }
        .reels-video-wrapper iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        .reels-text-section {
          padding: 50px clamp(48px, 13vw, 190px) 130px;
        }
        .reels-text-right p {
          font-family: var(--font-rm-neue);
          font-size: 20px;
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.1px;
          color: #F9F9F9;
          margin-bottom: 1.2em;
        }

        @media (max-width: 768px) {
          .reels-hero { padding: 88px 20px 48px; }
          .reels-video-section { padding: 0 20px 24px; }
          .reels-video-inner { max-width: 100%; }
          .reels-text-section { padding: 36px 20px 80px; }
        }
      `}</style>

      <div
        className={`reels-overlay${visible ? ' reels-overlay--visible' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="reels-close-bar">
          <button className="reels-close-btn" onClick={handleClose}>
            CLOSE ×
          </button>
        </div>

        <div className="reels-content">

          <div className="reels-hero">
            <h1 className="reels-title">Motion Reels</h1>
            <p className="reels-subtitle">2024</p>
          </div>

          <div className="reels-video-section">
            <div className="reels-video-inner">
              <div className="reels-video-wrapper">
                <iframe
                  src="https://vimeo.com/showcase/11577391/embed"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Motion Reels"
                />
              </div>
            </div>
          </div>

          <div className="reels-text-section">
            <div className="text-col">
              <div className="text-col__left" />
              <div className="reels-text-right text-col__right text-col__content">
                <p>
                  A selection of motion work, where the typography stops sitting still. These reels extend the same instincts that run through the rest of the practice, type, rhythm, and a feel for craft, into time and movement: titles, brand moments, and type in motion that's built to be felt as much as read. Less a separate discipline than the same design thinking, set going.
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
