'use client';

import { useState, useEffect } from 'react';

function AnalogClock({ dark = false }: { dark?: boolean }) {
  const [hands, setHands] = useState({ hour: 0, minute: 0, second: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours() % 12;
      const m = now.getMinutes();
      const s = now.getSeconds();
      setHands({ hour: h * 30 + m * 0.5, minute: m * 6 + s * 0.1, second: s * 6 });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const ringStroke = dark ? 'rgba(255,255,255,0.5)' : '#111';
  const handStroke = dark ? 'rgba(255,255,255,0.9)' : '#111';
  const dotFill    = dark ? '#FFFFFF' : '#111';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 80 80" fill="none" aria-label="Live clock">
      <circle cx="40" cy="40" r="39.5" stroke={ringStroke} />
      <line x1="40" y1="40" x2="40" y2="20" stroke={handStroke} strokeWidth="1.5" transform={`rotate(${hands.hour}, 40, 40)`} />
      <line x1="40" y1="40" x2="40" y2="7.5" stroke={handStroke} strokeWidth="1" transform={`rotate(${hands.minute}, 40, 40)`} />
      <line x1="40" y1="40" x2="40" y2="6" stroke="#C99213" strokeWidth="1" transform={`rotate(${hands.second}, 40, 40)`} />
      <circle cx="40" cy="40" r="0.888889" fill={dotFill} />
    </svg>
  );
}

function TimeDisplay() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      setTime(`${h12.toString().padStart(2, '0')}:${m}:${s} ${ampm}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{time}</span>;
}


export function ProjectFooter({ dark = false }: { dark?: boolean }) {
  const textColor   = dark ? 'rgba(255,255,255,0.65)' : '#111';
  const mutedColor  = dark ? 'rgba(255,255,255,0.4)'  : 'rgba(0,0,0,0.5)';
  const dimColor    = dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.4)';
  const borderColor = dark ? 'rgba(255,255,255,0.1)'  : 'rgba(0,0,0,0.1)';

  return (
    <footer
      style={{
        fontFamily: 'var(--font-general-sans)',
        padding: '64px 80px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        backgroundColor: dark ? '#0A0A0A' : undefined,
      }}
      className="pf-footer"
    >
      <style>{`
        .pf-main-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .pf-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }
        @media (max-width: 640px) {
          .pf-footer { padding: 48px 24px calc(var(--nav-bottom) + 56px) !important; }
          .pf-main-row { flex-direction: column; align-items: flex-start; gap: 24px; }
          .pf-right { align-items: flex-end; align-self: flex-end; }
        }
      `}</style>
      {/* Main row */}
      <div className="pf-main-row">
        {/* Left: clock + time + address */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <AnalogClock dark={dark} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 16,
                fontWeight: 400,
                color: textColor,
                letterSpacing: '-0.01em',
              }}
            >
              <TimeDisplay />
            </span>
            <span
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 16,
                fontWeight: 400,
                color: textColor,
                letterSpacing: '-0.01em',
              }}
            >
              Mumbai, India
            </span>
            <span
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 16,
                fontWeight: 400,
                color: textColor,
                letterSpacing: '-0.01em',
              }}
            >
              London, United Kingdom
            </span>
          </div>
        </div>

        {/* Right: social links */}
        <div className="pf-right">
          <a
            href="https://www.instagram.com/kshitij.gotiwale/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-rm-neue)', fontSize: 16, fontWeight: 400, color: mutedColor, textDecoration: 'none', letterSpacing: '0.02em' }}
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.linkedin.com/in/kshitij-gotiwale-787492198/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-rm-neue)', fontSize: 16, fontWeight: 400, color: mutedColor, textDecoration: 'none', letterSpacing: '0.02em' }}
          >
            LINKEDIN
          </a>
          <a
            href="mailto:kgotiwale@gmail.com?subject=(from%20website)%20Hi%20you%20absolutely%20beautiful%20bastard!"
            style={{ fontFamily: 'var(--font-rm-neue)', fontSize: 16, fontWeight: 400, color: mutedColor, textDecoration: 'none', letterSpacing: '0.02em' }}
          >
            LET&apos;S GET IN TOUCH :)
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: `1px solid ${borderColor}`,
          paddingTop: 12,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-rm-neue)',
            fontSize: 14,
            fontWeight: 400,
            color: dimColor,
            letterSpacing: '0.02em',
          }}
        >
          KSHITIJ GOTIWALE © 2026
        </span>
        <a
          href="/2026_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-rm-neue)',
            fontSize: 14,
            fontWeight: 400,
            color: dimColor,
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          RESUME/CV
        </a>
      </div>
    </footer>
  );
}
