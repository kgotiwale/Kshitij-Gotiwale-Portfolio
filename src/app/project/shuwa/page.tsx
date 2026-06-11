import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { HorizontalImageStrip } from '@/components/HorizontalImageStrip';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "Shuwa — KshitijGotiwale",
  description: "Shuwa — Branding",
};

const STRIP_1 = [
  { src: '/images/shuwa/scroll1.png', alt: 'Shuwa' },
  { src: '/images/shuwa/scroll2.png', alt: 'Shuwa' },
  { src: '/images/shuwa/scroll3.mp4', alt: 'Shuwa' },
  { src: '/images/shuwa/scroll4.mp4', alt: 'Shuwa' },
  { src: '/images/shuwa/scroll5.mp4', alt: 'Shuwa' },
  { src: '/images/shuwa/scroll6.mp4', alt: 'Shuwa' },
];

export default function ShuwaPage() {
  return (
    <>
      <ProjectHero
        title="SHUWA"
        bgColor="#C4593D"
        imageSrc="/images/shuwa/NewHero.png"
        imageAlt="Shuwa"
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
          {['2025', 'Branding/Packaging/Identity', 'London, U.K'].map((item, i) => (
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
            href="https://www.instagram.com/shuwabombay/"
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
            Creative Director
          </a>
        </div>

        {/* Hero text section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(32px, 6.94vw, 100px)',
              fontWeight: 400,
              color: '#C4593D',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            A FEAST THAT'S WORTH THE WAIT
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
              Shuwa takes its name from the Omani dish cooked underground for two days and shared on the days that matter most. I worked on the brand and identity: a visual language built on patience, fire and celebration, one that carries the weight of the tradition without turning it into a museum piece.
            </p>
          </div>
        </div>


        {/* Full width image 1 */}
        <div className="proj-img-pad">
          <Image
            src="/images/shuwa/full-1.jpg"
            alt="Shuwa"
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
              Shuwa, the dish, is the opposite of fast food. Meat is spiced, wrapped in palm leaves, lowered into an earth oven and left to the heat for a day or more. It's communal, ceremonial, and slow on purpose.
              <br /><br />
              None of that is easy to put on a sign.
              <br /><br />
              The challenge was to bottle the feeling, the occasion, the smoke, the patience, into something that reads in a second on a storefront.
            </p>
          </div>
        </div>

        {/* Full width image 2 */}
        <div className="proj-img-pad">
          <Image
            src="/images/shuwa/full-2.jpg"
            alt="Shuwa"
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
              color: '#C4593D',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            EARTH, FIRE, AND THE LONG WAIT
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
              The identity takes its cues straight from the cooking. The deep colours of spice and embers. The warmth of something that's been over heat for hours. A quiet confidence, because real shuwa never rushes.
              <br /><br />
              It feels rooted and contemporary at once, drawn from the tradition, not dressed up as a costume of it.
              <br /><br />
              Old way of cooking. New way of seeing it.
            </p>
          </div>
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
              color: '#C4593D',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            A NAME IN TWO SCRIPTS
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
              Shuwa lives between Arabic and Latin, and the identity had to honour both, not bolt one onto the other.
              <br /><br />
              So the wordmark was built to feel native in each script, treated with equal care, so the brand reads as genuinely of its place rather than translated for an outside audience.
            </p>
          </div>
        </div>

        {/* Final grid — 2-col */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/shuwa/grid1.gif', alt: 'Shuwa' },
            { src: '/images/shuwa/grid2.png', alt: 'Shuwa' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" unoptimized={img.src.endsWith('.gif')} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
              color: '#C4593D',
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
        <div className="proj-img-pad">
          <Image
            src="/images/shuwa/end.png"
            alt="Shuwa"
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
              Shuwa is a dish people wait two days for, and gather around when it's ready. The brand's only job is to earn that same anticipation before the first bite.
              <br /><br />
              Good branding here isn't decoration. It's the promise that what's coming is worth the wait.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/shuwa" />
        <ProjectFooter />
      </div>
    </>
  );
}
