import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { HorizontalImageStrip } from '@/components/HorizontalImageStrip';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "Project 12:40 — KshitijGotiwale",
  description: "Project 12:40 — Typeface",
};

const STRIP_1 = [
  { src: '/images/project1240/scroll6.png', alt: 'Casio F-91W Devanagari specimen — printed' },
  { src: '/images/project1240/scroll1.png', alt: 'Typeface variables — shirorekha, edges, conjuncts' },
  { src: '/images/project1240/scroll2.png', alt: 'First edition specimen booklet — 08:39' },
  { src: '/images/project1240/scroll3.png', alt: '12:40 Devanagari letterforms with extended descenders' },
  { src: '/images/project1240/scroll4.png', alt: 'Panchang calendar application — Somvar' },
  { src: '/images/project1240/scroll5.png', alt: '12:40 specimen book — green cover' },
];

const STRIP_2 = [
  { src: '/images/project1240/scroll10.png', alt: 'Inqilab — extended and original Devanagari variants' },
  { src: '/images/project1240/scroll9.png', alt: 'Specimen book spread — Casio F-91W and 3D numerals' },
  { src: '/images/project1240/scroll8.png', alt: '12:40 acrylic specimen — shadow on ground' },
  { src: '/images/project1240/scroll7.png', alt: '12:40 acrylic specimen on cobblestones' },
];

export default function Project1240Page() {
  return (
    <>
      <ProjectHero
        title="PROJECT 12:40"
        bgColor="#82EA73"
        imageSrc="/images/project1240/1240-hero-intro.png"
        imageAlt="Project 12:40"
      />

      {/* White content section — position: relative + z-index: 2 makes it scroll over the sticky hero */}
      <div style={{ position: 'relative', zIndex: 2, background: '#f9f9f9', minHeight: '100vh', boxShadow: '0px -10px 30px 0px rgba(248, 218, 197, 0.40)' }}>

        {/* Metadata bar */}
        <div
          className="proj-side-pad meta-bar"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 28,
            paddingBottom: 28,
          }}
        >
          {['2025', 'Typeface Design', 'London, U.K'].map((item, i) => (
            <span
              key={item}
              className={i === 2 ? 'meta-location' : undefined}
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 'clamp(13px, 3.8vw, 20px)',
                fontWeight: 400,
                color: 'rgb(10, 10, 10)',
                letterSpacing: '-0.1px',
              }}
            >
              {item}
            </span>
          ))}
          <a
            href="https://gcd.studio/pages/12-40"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(13px, 3.8vw, 20px)',
              fontWeight: 400,
              color: 'rgb(111, 114, 111)',
              letterSpacing: '-0.1px',
              textDecoration: 'none',
            }}
          >
            Central Saint Martins | UAL
          </a>
        </div>

        {/* Hero text section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(32px, 6.94vw, 100px)',
              fontWeight: 400,
              color: '#1a3f26',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            TYPEFACE TO RECLAIM HISTORY AS A MOMENT
          </h2>
          <div className="proj-text-col">
            <div style={{ maxWidth: '45%', width: '100%' }} />
            <p
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 'clamp(24px, calc(24px + (40 - 24) * ((100vw - 1024px) / (1440 - 1024))), 40px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.2px',
                color: '#111',
                maxWidth: '50%',
                width: '100%',
                margin: 0,
              }}
            >
              12:40 is a monolinear typeface that unites Latin, Devanagari and Urdu without erasing their individuality. It began with the digital clocks of a Mumbai childhood, whose numbers never spoke in the script, a quiet want, to make one a grandmother could read, that we feel lucky to have built.
            </p>
          </div>
        </div>

        {/* Side images */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/project1240/1240-side-1.png', alt: 'Project 12:40' },
            { src: '/images/project1240/1240-side-2.png', alt: 'Project 12:40' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Brand web — full width */}
        <div className="proj-img-pad">
          <Image
              src="/images/project1240/1240-full-1.png"
              alt="Project 12:40"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
        </div>

        {/* Text + big logo */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(32px, 5.56vw, 80px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <div className="proj-text-col">
            <div style={{ maxWidth: '45%', width: '100%' }} />
            <p
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.3,
                letterSpacing: '-0.1px',
                color: '#111',
                maxWidth: '40%',
                width: '100%',
                margin: 0,
              }}
            >
              Growing up between Mumbai and Bhopal, I was fairly type-obsessed, and I couldn&apos;t ignore one thing: there were almost no legible, regionally rooted digital numerals made for Devanagari, the script I grew up surrounded by.
              <br /><br />
              The shop signs had it. The regional packaging had it. Even a humble loaf of Wibs bread in Bombay — wrapped in a Devanagari take on Cooper Black — felt more alive than anything on my computer.
              <br /><br />
              The expressiveness was already there. It just hadn&apos;t made it onto the screen.
            </p>
          </div>
        </div>

        {/* Big logo — full width */}
        <div className="proj-img-pad">
          <Image
              src="/images/project1240/1240-full-2.png"
              alt="Project 12:40"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
        </div>

        {/* "BUILT ON A GRID" section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#1a3f26',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            BUILT ON A GRID, NOT BOXED BY ONE
          </h2>
          <div className="proj-text-col">
            <div style={{ maxWidth: '45%', width: '100%' }} />
            <p
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.3,
                letterSpacing: '-0.1px',
                color: '#111',
                maxWidth: '40%',
                width: '100%',
                margin: 0,
              }}
            >
              I drew 12:40 as a monolinear, segmented letterset — inspired by old technologies and the early digital displays of my childhood — on a grid that holds Latin, Devanagari and Urdu together without flattening any of them.
              <br /><br />
              That meant walking a line. Latin runs narrow; Devanagari runs wide and lives mostly off-screen, on busy streetsides. I deliberately broke the śirorekhā — the horizontal headline stroke — in many letters, so the headstroke doesn&apos;t fully connect. Figuring out the alternate glyphs while keeping the overall texture readable was the hard part.
              <br /><br />
              The goal was never one system winning over the other. It was knowing which influence to apply, when, and why. I&apos;d always wanted to treat the everyday, lived typography of India with the same seriousness as a Swiss poster.
            </p>
          </div>
        </div>

        {/* Shopfront — full width */}
        <div className="proj-img-pad">
          <Image
              src="/images/project1240/1240-shopfront.png"
              alt="12:40 — Devanagari glyph monolinear construction"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
        </div>

        {/* Horizontal strip 1 — brand/identity images */}
        <HorizontalImageStrip images={STRIP_1} speed={32} />

        {/* "THE BIG REVEAL" section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#1a3f26',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            IT NEEDED TO BE HELD, NOT JUST SEEN
          </h2>
        </div>

        {/* Specimen book pair — grid construction */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/project1240/square1.png', alt: 'Specimen book spread — glyph grid construction' },
            { src: '/images/project1240/square2.png', alt: 'Specimen book spread — numerals and text specimens' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Specimen book pair — alphabet */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/project1240/square3.png', alt: 'Specimen book spread — Devanagari alphabet specimen' },
            { src: '/images/project1240/square4.png', alt: 'Specimen book — full Devanagari alphabet and cover' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Text about brand / social */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(32px, 5.56vw, 80px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <div className="proj-text-col">
            <div style={{ maxWidth: '45%', width: '100%' }} />
            <p
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.3,
                letterSpacing: '-0.1px',
                color: '#111',
                maxWidth: '40%',
                width: '100%',
                margin: 0,
              }}
            >
              12:40 began as a typeface. It didn&apos;t stay one.
              <br /><br />
              I made a printed specimen book, because the project needed to live in the physical world — to be held and read, not scrolled past. On a screen, the typeface risks being read as just another digital experiment. On paper, in a book, it feels grounded, contextualised, almost archival.
              <br /><br />
              The book is the artefact. It&apos;s how the research survives beyond its digital use.
            </p>
          </div>
        </div>

        {/* "LAUNCH IN A WAY NO-ONE COULD MISS" section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#1a3f26',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            WHERE IT WENT
          </h2>
        </div>

        {/* Horizontal strip 2 — launch/event images (reverse direction) */}
        <HorizontalImageStrip images={STRIP_2} speed={28} reverse />

        {/* Final gallery — 2-col */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/project1240/grid1.png', alt: 'Casio F-91W Devanagari poster — printed' },
            { src: '/images/project1240/grid2.png', alt: 'Ajanta Circus — Devanagari type poster' },
            { src: '/images/project1240/grid3.png', alt: 'Nike — 24.9 km Devanagari distance poster' },
            { src: '/images/project1240/grid4.png', alt: 'Casio — Latin and Devanagari logo comparison' },
            { src: '/images/project1240/grid5.png', alt: '12:40 Devanagari character sheet — full alphabet' },
            { src: '/images/project1240/grid6.png', alt: 'Panchang calendar — four shirorekha variants' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* CSM degree show — full width */}
        <div className="proj-img-pad">
          <Image
              src="/images/project1240/end1.png"
              alt="12:40 at the CSM degree show"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
        </div>

        {/* Closing text */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(32px, 5.56vw, 80px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <div className="proj-text-col">
            <div style={{ maxWidth: '45%', width: '100%' }} />
            <p
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.3,
                letterSpacing: '-0.1px',
                color: '#111',
                maxWidth: '40%',
                width: '100%',
                margin: 0,
              }}
            >
              In October 2025, 12:40 was featured by It&apos;s Nice That.
              <br /><br />
              It started from a quiet want, a digital clock in Devanagari for my grandmother, and grew into a larger exploration of how design can honour many voices at once.
              <br /><br />
              It isn&apos;t finished.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/project-1240" />
        <ProjectFooter />
      </div>
    </>
  );
}
