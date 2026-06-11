import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { HorizontalImageStrip } from '@/components/HorizontalImageStrip';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "Subko Speciality Coffee — KshitijGotiwale",
  description: "Subko Speciality Coffee — Branding",
};

const STRIP_1 = [
  { src: '/images/subko/scroll3.jpg', alt: 'Subko' },
  { src: '/images/subko/scroll4.jpg', alt: 'Subko' },
  { src: '/images/subko/scroll5.jpg', alt: 'Subko' },
  { src: '/images/subko/scroll1.png', alt: 'Subko' },
  { src: '/images/subko/scroll2.png', alt: 'Subko' },
];

export default function SubkoPage() {
  return (
    <>
      <ProjectHero
        title="SUBKO SPECIALITY COFFEE"
        bgColor="#323f3f"
        titleColor="#ddd8cd"
        imageSrc="/images/subko/herobg.jpg"
        imageAlt="Subko Speciality Coffee"
        imageMaxHeight="35vh"
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
          {['2024', 'Branding', 'Mumbai, India'].map((item, i) => (
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
            href="https://www.instagram.com/subkocoffee/"
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
            Senior Graphic Designer
          </a>
        </div>

        {/* Hero text section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(32px, 6.94vw, 100px)',
              fontWeight: 400,
              color: '#323f3f',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            FROM THE SUBCONTINENT, FOR ALL
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
              &apos;Subko&apos; is a play on words. &apos;Sabko&apos; in the Hindustani linguistic register translates to &apos;for everyone&apos; or &apos;for all&apos;. We then decided to shift the spelling of &apos;Sabko&apos; with a &apos;U&apos; to represent pride in the Indian subcontinent as a region, bringing to life the portmanteau term &apos;Subko&apos;: from the subcontinent.
            </p>
          </div>
        </div>

        {/* Side images */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/subko/side-2.png', alt: 'Subko' },
            { src: '/images/subko/side-1.png', alt: 'Subko' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Full width image 1 */}
        <div className="proj-img-pad">
          <Image
            src="/images/subko/full-1.jpg"
            alt="Subko"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Text block */}
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
              As an Asian brand representing the Indian subcontinent, we felt that linguistic diversity is one of the unique markers of the region&apos;s rich diversity and &apos;composite&apos; culture developed over millenia.
              <br /><br />
              Our team saw three broad (but certainly not sole) cultural representations of the modern Indian subcontinent as the Latin script (English), Devanagari script (upon which many Sanskrit origin Indian languages are based), and Nastaliq script (Persian origin calligraphy seen in written Urdu language).
            </p>
          </div>
        </div>

        {/* Full width image 2 */}
        <div className="proj-img-pad">
          <Image
            src="/images/subko/full-2.jpg"
            alt="Subko"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Section heading */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#323f3f',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            MORE BRAND THAN A SHOP COULD HOLD
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
              The mission was to fuse the &apos;contemporary&apos; and the &apos;vintage&apos;. To create an identity that truly localises specialty coffee and bread from this part of the world.
              <br /><br />
              The synthesis of a global mindset that&apos;s proudly rooted in local practices. &apos;From the subcontinent, for all&apos;.
            </p>
          </div>
        </div>

        {/* Full width image 3 */}
        <div className="proj-img-pad">
          <Image
            src="/images/subko/full-3.jpg"
            alt="Subko"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Horizontal strip */}
        <HorizontalImageStrip images={STRIP_1} speed={32} />

        {/* Section heading 2 */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#323f3f',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            ROOTED, NOT RETRO
          </h2>
        </div>

        {/* Body paragraph 2 */}
        <div className="proj-side-pad" style={{ paddingTop: 0, paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
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
              The easy move would be nostalgia, lean on old Indian coffee-house clichés and call it heritage.
              <br /><br />
              Instead the identity draws on the subcontinent&apos;s own visual world and brings it forward: a system that feels unmistakably of its place without becoming a costume.
              <br /><br />
              Considered, contemporary, and confident enough to sit next to the best in the world.
              <br />
              Indian, on purpose. Not Indian, as decoration.
            </p>
          </div>
        </div>

        {/* Final grid — 2-col */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/subko/grid1.jpg', alt: 'Subko' },
            { src: '/images/subko/grid4.jpg', alt: 'Subko' },
            { src: '/images/subko/grid3.jpg', alt: 'Subko' },
            { src: '/images/subko/grid2.jpg', alt: 'Subko' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Section heading 3 */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#323f3f',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            WHY IT MATTERS
          </h2>
        </div>

        {/* End full width image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="proj-img-pad">
          <img src="/images/subko/end.gif" alt="Subko" style={{ width: '100%', height: 'auto', display: 'block' }} />
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
              Subko&apos;s pitch is that Indian coffee belongs on the world stage. The identity is how that claim gets made before a single cup is poured.
              <br /><br />
              Good branding here isn&apos;t decoration. It&apos;s the argument, that this coffee, from this place, deserves to be taken as seriously as anyone&apos;s.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/subko" />
        <ProjectFooter />
      </div>
    </>
  );
}
