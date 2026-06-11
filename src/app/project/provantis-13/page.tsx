import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { HorizontalImageStrip } from '@/components/HorizontalImageStrip';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "Provantis 13 — KshitijGotiwale",
  description: "Provantis 13 — Product Design",
};

const STRIP_1 = [
  { src: '/images/provantis-13/scroll1.png', alt: 'Provantis 13' },
  { src: '/images/provantis-13/scroll2.png', alt: 'Provantis 13' },
  { src: '/images/provantis-13/scroll3.png', alt: 'Provantis 13' },
  { src: '/images/provantis-13/scroll4.png', alt: 'Provantis 13' },
];


export default function Provantis13Page() {
  return (
    <>
      <ProjectHero
        title="PROVANTIS 13"
        bgColor="#F9F7EA"
        titleColor="#F53A22"
        imageSrc="/images/provantis-13/herobg.png"
        imageAlt="Provantis 13"
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
          {['2026', 'Product Design', 'London, U.K'].map((item, i) => (
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
            href="https://www.instem.com"
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
            Senior Product Designer
          </a>
        </div>

        {/* Hero text section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(32px, 6.94vw, 100px)',
              fontWeight: 400,
              color: '#F53A22',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            REBUILDING THE ENGINE ROOM OF PRECLINICAL SCIENCE
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
              Provantis is the software thousands of scientists run their preclinical studies on — and it had spent years as a legacy desktop product. I led the design of Provantis 13: taking it from an ageing desktop application to a modern web app, and building the component library, the system, and everything in between that made it possible.
            </p>
          </div>
        </div>

        {/* Side images */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/provantis-13/side-1.png', alt: 'Provantis 13' },
            { src: '/images/provantis-13/side-2.png', alt: 'Provantis 13' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Body paragraph */}
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
              Provantis 13 spans more than a dozen modules, from General Toxicology and Pathology through to Report Assembly and Audit, each with its own dense, regulated workflows.
              <br /><br />
              Designing them screen by screen would never hold together. So the work started in the middle: InstemUX, a single component library that every module is built from. The key considerations on the right shaped how that system was made, built once, consistent everywhere, and ready to scale as Provantis grows.
            </p>
          </div>
        </div>

        {/* Full width image 1 */}
        <div className="proj-img-pad">
          <Image
            src="/images/provantis-13/full-1.png"
            alt="Provantis 13"
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
              You don&apos;t replatform software like this lightly.
              <br /><br />
              Provantis isn&apos;t a side project people open now and then. It&apos;s the daily workbench for regulated science, dense, high-stakes, used for hours at a time by people who know exactly how it should behave.
              <br /><br />
              Move that to the web and you can&apos;t just make it prettier. Every screen carries years of muscle memory and regulatory weight. Get it wrong and you slow down the people who can least afford to be slowed down.
              <br /><br />
              So the job wasn&apos;t a reskin. It was a rebuild, done without breaking the trust the old product had earned.
            </p>
          </div>
        </div>

        {/* Full width image 2 */}
        <div className="proj-img-pad">
          <Image
            src="/images/provantis-13/full-2.png"
            alt="Provantis 13"
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
              color: '#F53A22',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            A LIBRARY BEFORE A LAYOUT
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
              You can&apos;t design an application this big screen by screen. It falls apart.
              <br /><br />
              So before the pages came the system: InstemUX, a full Figma component library built from the ground up, the buttons, tables, forms, patterns, and rules that every screen would be made of. One source of truth, so the product stays consistent as it grows and engineering builds from the same parts the design does.
              <br /><br />
              Design the kit first. Then the product designs itself.
            </p>
          </div>
        </div>

        {/* Side images 2 */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/provantis-13/side-4.png', alt: 'Provantis 13' },
            { src: '/images/provantis-13/side-3.png', alt: 'Provantis 13' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Full width image 3 */}
        <div className="proj-img-pad">
          <Image
            src="/images/provantis-13/full-3.png"
            alt="Provantis 13"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Horizontal strip 1 */}
        <HorizontalImageStrip images={STRIP_1} speed={32} />

        {/* Section heading 2 */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#F53A22',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            BUILT FOR DENSITY, NOT DEMOS
          </h2>
        </div>

        {/* Text block below section 2 heading */}
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
              Enterprise science software lives or dies on dense screens, long tables, deep forms, a lot of data on view at once. The easy thing is to design for the showcase. The right thing is to design for the scientist on hour six.
              <br /><br />
              So the components were built for the hard cases first: heavy data, edge states, the screens nobody screenshots but everyone uses.
              <br /><br />
              If it held up there, it held up everywhere.
            </p>
          </div>
        </div>

        {/* Final grid — 2-col */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/provantis-13/grid1.png', alt: 'Provantis 13' },
            { src: '/images/provantis-13/grid2.png', alt: 'Provantis 13' },
            { src: '/images/provantis-13/grid3.png', alt: 'Provantis 13' },
            { src: '/images/provantis-13/grid4.png', alt: 'Provantis 13' },
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
              color: '#F53A22',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            FROM DESKTOP HABIT TO WEB INSTINCT
          </h2>
        </div>

        {/* End full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/provantis-13/end.png"
            alt="Provantis 13"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Closing text */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(32px, 5.56vw, 80px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <div className="proj-text-col" style={{ marginBottom: 48 }}>
            <div style={{ maxWidth: '45%', width: '100%' }} />
            <h3
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 'clamp(22px, 3.13vw, 45px)',
                fontWeight: 400,
                color: '#F53A22',
                textTransform: 'uppercase',
                letterSpacing: '-0.35px',
                margin: 0,
                lineHeight: 1.05,
                maxWidth: '40%',
                width: '100%',
              }}
            >
              WHY IT MATTERS
            </h3>
          </div>
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
              Provantis sits underneath research that has to be right. The science it carries doesn&apos;t get a second draft.
              <br /><br />
              A tool like that earns its keep quietly, by being fast, clear, and trusted by the people leaning on it all day. That&apos;s the bar a rebuild like this has to clear.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/provantis-13" />
        <ProjectFooter />
      </div>
    </>
  );
}
