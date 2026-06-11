'use client';

import Image from 'next/image';
import { ProjectFooter } from '@/components/ProjectFooter';



// ── Main export ───────────────────────────────────────────────────────────────

export function AboutContent() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#f9f9f9' }}>

      {/* ── SECTION 1: HERO (sticky) ── */}
      <section
        style={{
          position: 'sticky',
          top: 0,
          minHeight: 'clamp(420px, 75vh, 601px)',
          backgroundColor: '#0a0a0a',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <div style={{ paddingTop: 'clamp(80px, 25vh, 268px)', paddingRight: 48, paddingBottom: 'clamp(48px, 10vh, 104px)', paddingLeft: 48, textAlign: 'center' }}>
          <h1 style={{ margin: 0, lineHeight: 1.12 }}>
            <strong
              style={{
                fontFamily: 'var(--font-rm-neue-vf)',
                fontSize: 'clamp(32px, 6.25vw, 90px)',
                fontWeight: 400,
                letterSpacing: '-0.8px',
                lineHeight: 1.12,
                color: '#f9f9f9',
                display: 'inline',
              }}
            >
              KSHITIJ GOTIWALE
            </strong>
            <br />
            <em
              style={{
                fontFamily: 'var(--font-ot-jubilee)',
                fontSize: 'clamp(36px, 6.94vw, 100px)',
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '-0.5px',
                lineHeight: 1.12,
                color: '#f9f9f9',
                display: 'inline',
              }}
            >
              Art Director and Senior Product Designer.
            </em>
          </h1>
        </div>
      </section>

      {/* ── SECTION 2: IMAGE + BODY ── */}
      <style>{`
        .about-image-body { display: flex; align-items: center; gap: 64px; }
        .about-image-col { flex: 0 0 55%; max-width: 55%; }
        .about-text-col { flex: 1; }
        @media (max-width: 768px) {
          .about-image-body { flex-direction: column; gap: 32px; }
          .about-image-col { flex: none; max-width: 100%; width: 100%; }
          .about-text-col { width: 100%; }
          .about-section2-inner { padding-bottom: 40px !important; }
          .about-tagline { min-height: 0 !important; padding: 32px 24px !important; }
        }
      `}</style>
      <section style={{ backgroundColor: '#0a0a0a', position: 'relative', zIndex: 1, boxShadow: '0px -10px 30px 0px rgba(0, 0, 0, 0.40)' }}>
        <div className="proj-side-pad about-section2-inner" style={{ paddingTop: 64, paddingBottom: 80 }}>
          <div className="about-image-body">
            <div className="about-image-col">
              <Image
                src="/images/about/Me.png"
                alt="Kshitij Gotiwale"
                width={1920}
                height={1080}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className="about-text-col">
              <p
                style={{
                  fontFamily: 'var(--font-rm-neue)',
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 1.3,
                  letterSpacing: '-0.1px',
                  color: '#f9f9f9',
                  margin: 0,
                }}
              >
                I design two kinds of things: software that is dense enough to run on for hours, and brands that are light enough to live on a coffee bag. Most days I&apos;m doing product design — making complex, high-stakes tools that feels simple to the people who rely on them all day. Rest of the time, I&apos;m knees deep in typography, branding and editorial, usually working across multiple scripts and chasing the same stubborn question underneath all of it: whose voices get to be seen, and whose get left out?
                <br /><br />
                It&apos;s a thread that runs from a typeface that my grandmother could finally read, to a brand packaging that can be framed and put in MoMA. Trained in Chicago and London, fuelled by single-origin coffee and an unreasonable love of letterforms.
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-ot-jubilee)',
                  fontSize: 'clamp(22px, 3.13vw, 45px)',
                  fontWeight: 400,
                  color: '#f9f9f9',
                  textTransform: 'none',
                  letterSpacing: '-0.35px',
                  lineHeight: 1.05,
                  margin: '32px 0 0',
                }}
              >
                I take the work seriously. Myself, a little less so.{' '}
                <a
                  href="mailto:kgotiwale@gmail.com?subject=(from%20website)%20Hi%20you%20absolutely%20beautiful%20bastard!"
                  style={{ color: 'inherit', textDecoration: 'underline' }}
                >
                  Say hello!
                </a>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: "WE'RE NOT A BIG AGENCY" ── */}
      <section
        className="about-tagline"
        style={{
          backgroundColor: '#0a0a0a',
          minHeight: 248,
          padding: '40px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-rm-neue-vf)',
            fontSize: 'clamp(22px, 5.5vw, 40px)',
            fontWeight: 400,
            letterSpacing: '-0.2px',
            lineHeight: 1.1,
            color: '#f9f9f9',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Fuelled by single-origin and spreadsheets.<br />
          One of those I&apos;ll admit to enjoying.
        </h2>
      </section>


      {/* ── SECTION 9: FOOTER ── */}
      <div style={{ backgroundColor: '#0a0a0a' }}>
        <ProjectFooter dark />
      </div>

    </div>
  );
}
