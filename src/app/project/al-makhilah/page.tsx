import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { HorizontalImageStrip } from '@/components/HorizontalImageStrip';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "Al Makhilah — KshitijGotiwale",
  description: "Al Makhilah — Branding",
};

const STRIP_1 = [
  { src: '/images/al-makhilah/2037.png', alt: 'Al Makhilah' },
  { src: '/images/al-makhilah/2041.png', alt: 'Al Makhilah' },
  { src: '/images/al-makhilah/2042.png', alt: 'Al Makhilah' },
  { src: '/images/al-makhilah/2043.png', alt: 'Al Makhilah' },
  { src: '/images/al-makhilah/2044.png', alt: 'Al Makhilah' },
];

export default function AlMakhilahPage() {
  return (
    <>
      <ProjectHero
        title="AL MAKHILAH"
        bgColor="#FF428D"
        titleColor="#832148"
        imageSrc="/images/al-makhilah/20366.png"
        imageAlt="Al Makhilah"
        imageMaxHeight="50vh"
      />

      <div style={{ position: 'relative', zIndex: 2, background: '#f9f9f9', minHeight: '100vh', boxShadow: '0px -10px 30px 0px rgba(0,0,0,0.08)' }}>

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
          {['2026', 'Branding', 'London / UAE'].map((item, i) => (
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
            href="https://live.standards.site/al-makhilah"
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
            Creative Lead
          </a>
        </div>

        {/* Hero text section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(32px, 6.94vw, 100px)',
              fontWeight: 400,
              color: '#FF428D',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            A factory that makes joy, dressed like one
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
              Al Makhilah is a gummy factory whose name means imagination. It was branded like everything but. I rebranded it, taking an industrial manufacturer and giving it the colour, play and personality its product had all along, so the brand finally tastes like what it makes.
            </p>
          </div>
        </div>

        {/* Side images */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/al-makhilah/2038.png', alt: 'Al Makhilah' },
            { src: '/images/al-makhilah/2039.png', alt: 'Al Makhilah' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/al-makhilah/2034.png"
            alt="Al Makhilah"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Body copy */}
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
              Here&apos;s the mismatch. A gummy factory is, on paper, an industrial business, machinery, hygiene standards, bulk orders, B2B.
              <br /><br />
              But what comes off the line is pure joy: colour, chew, childhood. Most manufacturers brand the machinery and forget the magic.
              <br /><br />
              The whole point was to do the opposite. Lead with the candy, not the conveyor belt.
            </p>
          </div>
        </div>

        {/* Full width image 2 */}
        <div className="proj-img-pad">
          <Image
            src="/images/al-makhilah/2040.png"
            alt="Al Makhilah"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Section heading 2 */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#FF428D',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            Colour, straight from the source
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
              The best palette was sitting in the product the whole time.
              <br /><br />
              The identity takes its cues from the gummies themselves, bright, saturated, unapologetically sweet, turning the thing on the line into the thing on the bag, the wall, the truck. No need to invent a look. Just trust the candy.
            </p>
          </div>
        </div>

        {/* Horizontal strip 1 */}
        <HorizontalImageStrip images={STRIP_1} speed={32} />

        {/* Section heading 3 */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#FF428D',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            One brand, endless flavours
          </h2>
        </div>

        {/* Full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/al-makhilah/2045.png"
            alt="Al Makhilah"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/al-makhilah/2046.png"
            alt="Al Makhilah"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Side by side images */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/al-makhilah/2047.png', alt: 'Al Makhilah' },
            { src: '/images/al-makhilah/2048.png', alt: 'Al Makhilah' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
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
              A confectionery maker isn&apos;t one product. It&apos;s this flavour, that shape, the next ten nobody&apos;s made yet.
              <br /><br />
              So the system was built to stretch, bold and recognisable whether it&apos;s wrapping a pack today or a flavour that doesn&apos;t exist yet, without losing the family resemblance every time something new rolls out.
              <br /><br />
              Al Makhilah makes something people reach for to feel good. The brand&apos;s only job is to promise that feeling before the bag is even opened.
              <br /><br />
              Good branding here isn&apos;t decoration. It&apos;s the difference between a factory and a favourite.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/al-makhilah" />
        <ProjectFooter />
      </div>
    </>
  );
}
