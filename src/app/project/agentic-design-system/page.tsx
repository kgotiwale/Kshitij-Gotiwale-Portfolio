import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "Agentic Design System — KshitijGotiwale",
  description: "Agentic Design System — Case Study",
};


export default function AgenticDesignSystemPage() {
  return (
    <>
      <ProjectHero
        title="AGENTIC DESIGN SYSTEM"
        bgColor="#070A0B"
        titleColor="#D1CFB6"
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
          {['2026', 'Case-Study', 'London, U.K'].map((item, i) => (
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
            Project Lead
          </a>
        </div>

        {/* Hero text section */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(32px, 6.94vw, 100px)',
              fontWeight: 400,
              color: '#070A0B',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            A DESIGN SYSTEM A MACHINE CAN ACTUALLY RUN
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
              The Agentic Design System isn&apos;t about getting AI to draw components for me. It&apos;s the opposite: restructuring InstemUX so an agent can work inside it, auditing tokens, catching the drift between Figma and code, and keeping both sides honest, without me watching every corner of it. A system built less as documentation for developers, more as instructions for a machine.
            </p>
          </div>
        </div>

        {/* Full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/agentic-design-system/1.png"
            alt="Agentic Design System"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
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
              It always starts tidy. Then the Figma library says one thing, the code says another, the docs say a third, and nobody trusts any of them.
              <br /><br />
              It isn&apos;t laziness. Keeping all of it in sync is relentless, unglamorous work, the first thing to slip when there&apos;s a deadline.
              <br /><br />
              Asking an AI to generate the system doesn&apos;t fix that. Generate it and it&apos;s frozen the moment it&apos;s made.
            </p>
          </div>
        </div>

        {/* Full width image 1 */}
        <div className="proj-img-pad">
          <Image
            src="/images/agentic-design-system/2.png"
            alt="Agentic Design System"
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
              color: '#070A0B',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            DON&apos;T GENERATE IT. STRUCTURE IT.
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
              So the work wasn&apos;t prompting for output. It was building a system an agent could reason about, where the naming, the structure and the Figma all line up so a machine can follow them.
              <br /><br />
              Get the structure right and the agent does the upkeep. Get it wrong and no amount of AI saves you.
            </p>
          </div>
        </div>

        {/* Full width image 3 */}
        <div className="proj-img-pad">
          <Image
            src="/images/agentic-design-system/3.png"
            alt="Agentic Design System"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Full width image 4 */}
        <div className="proj-img-pad">
          <Image
            src="/images/agentic-design-system/4.png"
            alt="Agentic Design System"
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
              color: '#070A0B',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            TOKENS A MACHINE CAN FOLLOW
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
              Underneath it all is a layered token system: raw values at the bottom, intent-based names in the middle (text, surface, border, state), component-scoped tokens on top.
              <br /><br />
              That layering is the whole trick. The agent never needs to understand colour or type, it just follows the chain from intent to value. And because every token in code has a twin in Figma, an agent reading one file knows exactly what an agent reading the other knows.
              <br /><br />
              Dark mode is the proof: swap what the middle layer points to, and every component follows. Nothing has to be told.
            </p>
          </div>
        </div>

        {/* Full width image 5 */}
        <div className="proj-img-pad">
          <Image
            src="/images/agentic-design-system/5.png"
            alt="Agentic Design System"
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
              color: '#070A0B',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: 0,
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            ONE PROMPT, REAL JUDGMENT
          </h2>
        </div>

        {/* End full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/agentic-design-system/6.png"
            alt="Agentic Design System"
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
              With the system structured, the agent could take on the jobs a designer usually does by hand — from a single prompt, making its own calls:
              <br /><br />
              • Audit code against Figma and flag everything that&apos;s drifted<br />
              • Spot near-duplicate tokens doing the same job and consolidate them<br />
              • Grep every token against every component and clear out the dead ones<br />
              • Catch the screen using the wrong typeface and put it right
              <br /><br />
              It wasn&apos;t following a script. Given &ldquo;check if these are in sync,&rdquo; it decided how to check, what to cross-reference, and what to hand back.
              <br />
              Same prompt, same standard, every time.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/agentic-design-system" />
        <ProjectFooter />
      </div>
    </>
  );
}
