import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { HorizontalImageStrip } from '@/components/HorizontalImageStrip';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "Dr Donato — KshitijGotiwale",
  description: "Dr Donato — Branding",
};

const STRIP_1 = [
  { src: '/images/dr-donato/scroll5.png', alt: 'Dr Donato' },
  { src: '/images/dr-donato/scroll1.png', alt: 'Dr Donato' },
  { src: '/images/dr-donato/scroll2.png', alt: 'Dr Donato' },
  { src: '/images/dr-donato/scroll3.png', alt: 'Dr Donato' },
  { src: '/images/dr-donato/scroll4.png', alt: 'Dr Donato' },
];


export default function DrDonatoPage() {
  return (
    <>
      <ProjectHero
        title="DR DONATO"
        bgColor="#9D8FFF"
        titleColor="#F9F7EA"
        imageSrc="/images/dr-donato/herobg.png"
        imageAlt="Dr Donato"
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
          {['2026', 'Branding', 'London, U.K'].map((item, i) => (
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
            Creative Director
          </span>
        </div>

        {/* Hero text section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(32px, 6.94vw, 100px)',
              fontWeight: 400,
              color: '#9D8FFF',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            THE BAR THAT EARNS ITS SHELF
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
              Dr. Donato is a peanut protein bar that had everything going for it except a look that matched. I rebranded it — wordmark, packaging, the lot — into something that holds its own in a snack aisle stacked with shouting wrappers and tired health-food clichés.
            </p>
          </div>
        </div>

        {/* Side images */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/dr-donato/side-1.png', alt: 'Dr Donato' },
            { src: '/images/dr-donato/side-2.png', alt: 'Dr Donato' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Full width image 1 */}
        <div className="proj-img-pad">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dr-donato/full-1.gif" alt="Dr Donato" style={{ width: '100%', height: 'auto', display: 'block' }} />
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
              Walk the protein aisle and it all blurs: clinical whites, gym-bro blacks, the same three shades of &ldquo;natural&rdquo; beige. The category tells you it&rsquo;s good for you and forgets to be wanted.
              <br /><br />
              A peanut bar doesn&rsquo;t need to apologise for being a treat.
              <br /><br />
              So the brief I set myself was simple — make it feel like something you&rsquo;d reach for because you like it, not because you should.
            </p>
          </div>
        </div>

        {/* Smaller section heading + paragraph */}
        <div className="proj-side-pad" style={{ paddingTop: 8, paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <div className="proj-text-col" style={{ marginBottom: 48 }}>
            <div style={{ maxWidth: '45%', width: '100%' }} />
            <h3
              style={{
                fontFamily: 'var(--font-rm-neue)',
                fontSize: 'clamp(22px, 3.13vw, 45px)',
                fontWeight: 400,
                color: '#9D8FFF',
                textTransform: 'uppercase',
                letterSpacing: '-0.35px',
                margin: 0,
                lineHeight: 1.05,
                maxWidth: '40%',
                width: '100%',
              }}
            >
              ONE BAR, ON A CROWDED SHELF
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
              A wrapper has about a second to land. It competes flat-on against everything beside it, often face-out under hard retail lighting, frequently at arm&rsquo;s length.
              <br /><br />
              So the wordmark had to do the heavy lifting — legible from across the aisle, confident enough to feel like a brand and not a supplement.
              <br /><br />
              Everything else gets out of the way so the name, and the peanut, land first.
            </p>
          </div>
        </div>

        {/* Full width image 2 */}
        <div className="proj-img-pad">
          <Image
            src="/images/dr-donato/full-2.png"
            alt="Dr Donato"
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
              color: '#9D8FFF',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            MADE TO SCALE, NOT JUST TO SIT STILL
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
              A rebrand isn&rsquo;t one bar. It&rsquo;s the next ten flavours nobody&rsquo;s launched yet.
              <br /><br />
              So the system was built to stretch — a packaging structure that keeps Dr. Donato recognisable whether it&rsquo;s peanut today or whatever comes next, without redrawing the whole thing every time.
              <br /><br />
              Same brand. New flavour. No argument.
            </p>
          </div>
        </div>

        {/* Full width image 3 */}
        <div className="proj-img-pad">
          <Image
            src="/images/dr-donato/full-3.jpg"
            alt="Dr Donato"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
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
              color: '#9D8FFF',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            WHERE IT LANDED
          </h2>
        </div>

        {/* Final grid — 2-col */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/dr-donato/grid1.png', alt: 'Dr Donato' },
            { src: '/images/dr-donato/grid2.png', alt: 'Dr Donato' },
            { src: '/images/dr-donato/grid3.png', alt: 'Dr Donato' },
            { src: '/images/dr-donato/grid4.png', alt: 'Dr Donato' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* End full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/dr-donato/end.png"
            alt="Dr Donato"
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
              Dr. Donato is on shelves now, including across the Saudi market — a small bar doing the unglamorous, important job of being picked up.
              <br /><br />
              Good packaging isn&rsquo;t decoration. It&rsquo;s the difference between getting reached for and getting walked past.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/dr-donato" />
        <ProjectFooter />
      </div>
    </>
  );
}
