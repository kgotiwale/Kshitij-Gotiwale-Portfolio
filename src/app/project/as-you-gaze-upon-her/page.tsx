import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { HorizontalImageStrip } from '@/components/HorizontalImageStrip';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "As You Gaze Upon Her — KshitijGotiwale",
  description: "As You Gaze Upon Her — Editorial",
};

const STRIP_1 = [
  { src: '/images/as-you-gaze-upon-her/scroll-001.png', alt: 'As You Gaze Upon Her' },
  { src: '/images/as-you-gaze-upon-her/scroll-002.png', alt: 'As You Gaze Upon Her' },
  { src: '/images/as-you-gaze-upon-her/scroll-003.png', alt: 'As You Gaze Upon Her' },
  { src: '/images/as-you-gaze-upon-her/scroll-004.png', alt: 'As You Gaze Upon Her' },
  { src: '/images/as-you-gaze-upon-her/scroll-007.png', alt: 'As You Gaze Upon Her' },
];

export default function AsYouGazeUponHerPage() {
  return (
    <>
      <ProjectHero
        title="AS YOU GAZE UPON HER"
        bgColor="#F6CACE"
        titleColor="#F8F8F8"
        imageSrc="/images/as-you-gaze-upon-her/herobg.png"
        imageAlt="As You Gaze Upon Her"
        imageMaxHeight="35vh"
      />

      {/* White content section — position: relative + z-index: 2 makes it scroll over the sticky hero */}
      <div style={{ position: 'relative', zIndex: 2, background: '#f9f9f9', minHeight: '100vh', boxShadow: '0px -10px 30px 0px rgba(0, 0, 0, 0.10)' }}>

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
          {['2024', 'Editorial', 'London, U.K'].map((item, i) => (
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
          <span
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(13px, 3.8vw, 20px)',
              fontWeight: 400,
              color: 'rgb(111, 114, 111)',
              letterSpacing: '-0.1px',
            }}
          >
            PLACEHOLDER ROLE
          </span>
        </div>

        {/* Hero text section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(32px, 6.94vw, 100px)',
              fontWeight: 400,
              color: '#F6CACE',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            FINDING A SUBCONTINENTAL IDENTITY, ON ITS OWN TERMS
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
              As You Gaze Upon Her sets out to find a design identity for the Subcontinent, one drawn from the rich history that emerged after colonisation, rather than measured against the West. It&apos;s a search for a visual vocabulary that works in its own cultural context, and a first attempt at a design history the Subcontinent has never properly been given.
            </p>
          </div>
        </div>

        {/* Full width image 1 */}
        <div className="proj-img-pad">
          <Image
            src="/images/as-you-gaze-upon-her/full-1.png"
            alt="As You Gaze Upon Her"
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
              The word &quot;post-colonial&quot; isn&apos;t just a date. It&apos;s a way of knowing, thinking and seeing the world that steps outside the imperial frame.
              <br /><br />
              This project takes that literally. It asks what design looks like when it isn&apos;t being judged by someone else&apos;s eye, when the Subcontinent gets to define what good design is, in its own terms and for its own context.
              <br /><br />
              A different gaze, not a borrowed one.
            </p>
          </div>
        </div>

        {/* Full width image 2 */}
        <div className="proj-img-pad">
          <Image
            src="/images/as-you-gaze-upon-her/full-2.png"
            alt="As You Gaze Upon Her"
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
              color: '#F6CACE',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            NOT NOSTALGIA. ANALYSIS.
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
              Let&apos;s be clear about what this isn&apos;t.
              <br /><br />
              <em>&quot;The project isn&apos;t to invoke some weird speculative nostalgia, it is to explore the culture long suppressed and dominated with a critical analysis.&quot;</em>
              <br /><br />
              This is excavation, not romance — looking hard at a visual culture that was suppressed and dominated, and taking it seriously enough to study rather than sentimentalise.
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
              color: '#F6CACE',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            THE BEST OF IT NEVER CAME FROM A DESIGN SCHOOL
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
              Here&apos;s the irony the research kept returning: some of India&apos;s finest graphic design came from people who were never trained as designers.
              <br /><br />
              It lived in the pre-digital world of local magazines, made intuitively, day to day, by people solving real problems for real readers. Design doing its actual job: building a visual language that directly touches ordinary lives.
              <br /><br />
              No academy. No theory. Just the everyday, doing it better.
            </p>
          </div>
        </div>

        {/* Final grid — 2-col */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/as-you-gaze-upon-her/grid1.png', alt: 'As You Gaze Upon Her' },
            { src: '/images/as-you-gaze-upon-her/grid2.png', alt: 'As You Gaze Upon Her' },
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
              color: '#F6CACE',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            THREE SCRIPTS, ONE GAZE
          </h2>
        </div>

        {/* End full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/as-you-gaze-upon-her/end.gif"
            alt="As You Gaze Upon Her"
            width={0}
            height={0}
            sizes="100vw"
            unoptimized
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
              This was never meant to be the final word. It&apos;s broad strokes, a deliberate first move toward something much larger: a history of Subcontinental graphic design that takes its everyday, intuitive, uncredited makers as seriously as anyone in a textbook.
              <br /><br />
              The requisite first page of a book that still needs writing.
              <br /><br />
              How a culture is allowed to look, and who gets to decide what &quot;good&quot; looks like, is never neutral.
              This project is a small act of reclaiming that gaze: an argument that the Subcontinent&apos;s own visual language was always there, doing the work, waiting to be looked at properly.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/as-you-gaze-upon-her" />
        <ProjectFooter />
      </div>
    </>
  );
}
