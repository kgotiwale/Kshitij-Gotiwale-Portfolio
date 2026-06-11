import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { HorizontalImageStrip } from '@/components/HorizontalImageStrip';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "In Their Wake — KshitijGotiwale",
  description: "In Their Wake — Editorial",
};

const STRIP_1 = [
  { src: '/images/in-their-wake/scroll1.png', alt: 'In Their Wake' },
  { src: '/images/in-their-wake/scroll2.png', alt: 'In Their Wake' },
  { src: '/images/in-their-wake/scroll3.png', alt: 'In Their Wake' },
  { src: '/images/in-their-wake/scroll4.png', alt: 'In Their Wake' },
  { src: '/images/in-their-wake/scroll5.png', alt: 'In Their Wake' },
  { src: '/images/in-their-wake/scroll6.png', alt: 'In Their Wake' },
];

export default function InTheirWakePage() {
  return (
    <>
      <ProjectHero
        title="IN THEIR WAKE"
        bgColor="#EBB33A"
        titleColor="#F8F8F8"
        imageSrc="/images/in-their-wake/herobg.png"
        imageAlt="In Their Wake"
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
          {['2025', 'Editorial', 'London / Muscat / Bombay'].map((item, i) => (
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
            href="https://soundcloud.com/omanfm_om/in-their-wake-hassan-haider-on-memory-migration-and-belonging-interview"
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
            Lead Creative
          </a>
        </div>

        {/* Hero text section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(32px, 6.94vw, 100px)',
              fontWeight: 400,
              color: '#EBB33A',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            Fourteen generations, bound into one book
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
              <em>In Their Wake</em> is the story of a family that crossed the Indian Ocean for two centuries, Gujarati merchants who made a home in Oman, traced through fourteen generations and one house on the Muttrah Corniche. Hassan Haider wrote it. I led the design: giving a sprawling oral history a form strong enough to carry its weight.
            </p>
          </div>
        </div>

        {/* Full width image 1 */}
        <div className="proj-img-pad">
          <Image
            src="/images/in-their-wake/full-1.png"
            alt="In Their Wake"
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
              Memory doesn&apos;t move in straight lines. It loops, doubles back, drops a thread in 1797 and picks it up in 1933. The interview wanders the way real talking wanders.
              <br /><br />
              Tidying that into a neat timeline would have killed the thing that makes it alive.
              <br /><br />
              So the design doesn&apos;t fix the mess. It makes the mess navigable.
            </p>
          </div>
        </div>

        {/* Full width image 2 */}
        <div className="proj-img-pad">
          <Image
            src="/images/in-their-wake/full-2.png"
            alt="In Their Wake"
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
              color: '#EBB33A',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            Type that knows who&apos;s speaking
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
              The book holds several voices at once, the narrator, the man telling his family&apos;s story, and the moments where history simply lands.
              <br /><br />
              So I let the typography change register with them. Running text for the telling. A different face entirely when a sentence needs to stop you — a route established, a child&apos;s impossible prayer, a name carried across centuries. The big type isn&apos;t decoration; it&apos;s the book raising its voice.
              <br /><br />
              Type is the difference between someone talking and history landing.
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
              color: '#EBB33A',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            A century of paper, made urgent
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
              The story survives in fragile things: a 1933 British India passport, handwritten ledgers, trade tickets, a portrait worn soft by handling.
              <br /><br />
              Rather than present them as faded relics, I ran the archive through a high-contrast dithered duotone, black on a single insistent yellow, so a hundred years of documents read as one living body. Not history under glass. History still happening.
            </p>
          </div>
        </div>

        {/* Full width image 3 */}
        <div className="proj-img-pad">
          <Image
            src="/images/in-their-wake/full-3.png"
            alt="In Their Wake"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Section heading 3 */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#EBB33A',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            Built to speak in more than one tongue
          </h2>
        </div>

        {/* End full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/in-their-wake/DSCF1519.jpg"
            alt="In Their Wake"
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
              This is a migration story, and migration is multilingual by nature, Kutchi, Gujarati, Arabic, English, all in the same mouth.
              <br /><br />
              The publication is built to hold that. The [EN] marker on every page is a quiet promise that this edition is one of several, that the story can be read in the languages it was actually lived in, not flattened into one.
              <br /><br />
              A migration story that speaks only one language has already lost half of itself.
              <br /><br />
              Migration both preserves and erases. Most families lose the thread somewhere in the middle generations, between the country left behind and the one that becomes home.
              <br /><br />
              This book is design in service of memory: making sure that, for one family at least, the thread holds. That&apos;s the whole job. To leave something that lasts as long as the house on the Corniche.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/in-their-wake" />
        <ProjectFooter />
      </div>
    </>
  );
}
