import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { HorizontalImageStrip } from '@/components/HorizontalImageStrip';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "Behno New York — KshitijGotiwale",
  description: "Behno New York — Branding",
};

const STRIP_1 = [
  { src: '/images/behno/scroll-diwali.mp4', alt: 'Behno New York' },
  { src: '/images/behno/scroll1.png', alt: 'Behno New York' },
  { src: '/images/behno/scroll2.png', alt: 'Behno New York' },
  { src: '/images/behno/scroll3.png', alt: 'Behno New York' },
  { src: '/images/behno/scroll4.png', alt: 'Behno New York' },
  { src: '/images/behno/scroll5.png', alt: 'Behno New York' },
];

export default function BehnoNewYorkPage() {
  return (
    <>
      <ProjectHero
        title="BEHNO NEW YORK"
        bgColor="#251A21"
        titleColor="#F8F8F8"
        imageSrc="/images/behno/herobg.png"
        imageAlt="Behno New York"
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
          {['2025', 'Branding', 'New York, USA'].map((item, i) => (
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
            href="https://behno.com"
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
              color: '#894D39',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            LUXURY WITH A CONSCIENCE, AND THE PROOF TO BACK IT
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
              Behno is a New York handbag label built on an uncomfortable idea: that luxury and ethics shouldn&apos;t be a trade-off. Designed in NYC, made in India, named after the Hindi word for sisters. I worked on it as Creative Director and led the design of Takat, its first unisex capsule.
            </p>
          </div>
        </div>

        {/* Side images */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/behno/side-1.png', alt: 'Behno New York' },
            { src: '/images/behno/side-2.png', alt: 'Behno New York' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Full width image 1 */}
        <div className="proj-img-pad">
          <Image
            src="/images/behno/full-1.png"
            alt="Behno New York"
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
              The category has a tell. The moment a brand mentions ethics, the design tends to apologise — earnest, beige, more worthy than wanted.
              <br /><br />
              Behno&apos;s whole point is that it shouldn&apos;t have to. The bags are made under the Behno Standard — fair pay, safe conditions, women&apos;s rights, real worker welfare, and they&apos;re beautiful, Italian-leather, properly luxurious.
              <br /><br />
              The job was to make the design carry both at once. Desirable first. Conscientious without saying a word.
            </p>
          </div>
        </div>

        {/* Full width image 2 */}
        <div className="proj-img-pad">
          <Image
            src="/images/behno/full-2.png"
            alt="Behno New York"
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
              color: '#894D39',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            A STOREFRONT THAT SELLS THE BAG AND THE BELIEF
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
              A luxury site has to make you want the thing. An ethical one has to make you believe the story behind it. Most pick one and lose the other.
              <br /><br />
              As senior designer, I worked on the digital experience to hold both, letting the craft and the colour do the selling, while the values sit there as substance, not a lecture. The ethics aren&apos;t a banner across the top. They&apos;re in the confidence of the thing.
              <br /><br />
              You buy the bag. You keep the reason.
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
              color: '#894D39',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            TAKAT — STRENGTH, WITH NO GENDER ATTACHED
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
              <em>Takat</em>{' '}means strength. It&apos;s also Behno&apos;s first unisex capsule, and the one I led end to end.
              <br /><br />
              The brief I set was simple: take everything Behno stands for, the craft, the conscience, the made-in-India pride, and strip the gender out of it. A line defined by how it&apos;s made and what it stands for, not who it&apos;s &ldquo;for.&rdquo;
              <br /><br />
              Strength doesn&apos;t need a pronoun.
            </p>
          </div>
        </div>

        {/* Full width image 3 */}
        <div className="proj-img-pad">
          <Image
            src="/images/behno/full-3.png"
            alt="Behno New York"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Final grid — 2-col */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/behno/grid1.avif', alt: 'Behno New York' },
            { src: '/images/behno/grid2.avif', alt: 'Behno New York' },
            { src: '/images/behno/grid3.webp', alt: 'Behno New York' },
            { src: '/images/behno/grid4.jpg', alt: 'Behno New York' },
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
              color: '#894D39',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            MADE IN INDIA, ON ITS OWN TERMS
          </h2>
        </div>

        {/* End full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/behno/end.png"
            alt="Behno New York"
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
              Behno was born to redefine the &ldquo;Made in India&rdquo; label — to treat it as a mark of craft and care rather than a discount.
              <br /><br />
              That pride runs through Takat too: a capsule that wears its origin as the point, not the caveat. Confident, contemporary, and unmistakably rooted in where and how it&apos;s made.
              <br /><br />
              Behno&apos;s bet is that people will choose luxury that means something, if you don&apos;t make them choose between looking good and doing good.
              <br /><br />
              The design&apos;s only job is to remove that choice. Make it beautiful enough to want, and honest enough to keep wanting.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/behno-new-york" />
        <ProjectFooter />
      </div>
    </>
  );
}
