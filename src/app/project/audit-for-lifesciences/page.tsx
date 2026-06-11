import Image from 'next/image';
import { ProjectHero } from '@/components/ProjectHero';
import { HorizontalImageStrip } from '@/components/HorizontalImageStrip';
import { ProjectNavBar } from '@/components/ProjectNavBar';
import { ProjectFooter } from '@/components/ProjectFooter';

export const metadata = {
  title: "Audit for LifeSciences — KshitijGotiwale",
  description: "Audit for LifeSciences — Product Design",
};

const STRIP_1 = [
  { src: '/images/audit/scroll1.png', alt: 'Audit trail search interface' },
  { src: '/images/audit/scroll2.png', alt: 'Audit trail view — chronological record' },
  { src: '/images/audit/scroll3.png', alt: 'Audit trail view — change detail' },
  { src: '/images/audit/scroll4.png', alt: 'Audit trail view — filtered results' },
  { src: '/images/audit/scroll5.png', alt: 'Audit trail view — summary panel' },
];

const STRIP_2 = [
  { src: '/images/audit/scroll7.png', alt: 'Audit for LifeSciences' },
  { src: '/images/audit/scroll8.png', alt: 'Audit for LifeSciences' },
  { src: '/images/audit/scroll9.png', alt: 'Audit for LifeSciences' },
  { src: '/images/audit/scroll10.png', alt: 'Audit for LifeSciences' },
];

export default function AuditForLifesciencesPage() {
  return (
    <>
      <ProjectHero
        title="AUDIT FOR LIFESCIENCES"
        bgColor="#2176FF"
        titleColor="#C8FAFF"
        imageSrc="/images/audit/hero.png"
        imageAlt="Audit for LifeSciences — product design hero"
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
              color: '#2176FF',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              margin: '0 0 80px',
              lineHeight: 1.12,
              textAlign: 'center',
            }}
          >
            THE RECORD NOBODY COULD READ
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
              In regulated science, the audit trail is the law. It&apos;s the legal memory of a lab — who changed what, when, and why — and almost nobody can actually read it. Audit for Life Sciences is a redesign of that memory: turning a wall of compliance rows into something a scientist, or an auditor, can actually follow.
            </p>
          </div>
        </div>

        {/* Side images */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/audit/side-1.png', alt: 'Before — legacy audit trail interface' },
            { src: '/images/audit/side-2.png', alt: 'After — redesigned audit trail interface' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* Full width image 1 */}
        <div className="proj-img-pad">
          <Image
            src="/images/audit/full-1.png"
            alt="Audit for LifeSciences — laptop mockup"
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
              In a Good Laboratory Practice environment, nothing gets deleted and nothing goes unrecorded. Every edit, every reason, every timestamp is kept — because one day a regulator might need to reconstruct exactly what happened.
              <br /><br />
              The result is thousands of rows that are technically complete and practically unreadable.
              <br /><br />
              The story is all in there. You just can&apos;t see it.
            </p>
          </div>
        </div>

        {/* Full width image 2 */}
        <div className="proj-img-pad">
          <Image
            src="/images/audit/full-2.png"
            alt="Audit for LifeSciences — workflow diagram"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Section heading + body */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#2176FF',
              textTransform: 'uppercase',
              letterSpacing: '-0.35px',
              margin: '0 0 60px',
              lineHeight: 1.05,
              textAlign: 'center',
            }}
          >
            A SPREADSHEET THAT BEHAVES
          </h2>
        </div>

        {/* Full width image 3 */}
        <div className="proj-img-pad">
          <Image
            src="/images/audit/full-3.png"
            alt="Audit for LifeSciences — application screen"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Horizontal strip 1 */}
        <HorizontalImageStrip images={STRIP_1} speed={32} />

        {/* Text block 2 */}
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
              None of this was designed against tidy dummy data. Every paradigm was tested against real audit data, across more than one module, so the design held up against the genuine mess of regulated work — not a clean demo that falls over in production.
              <br /><br />
              <strong>Impact: ~ £11M saved per year / customer for Instem</strong>
              <br /><br />
              If it couldn&apos;t survive the real record, it didn&apos;t make the cut.
            </p>
          </div>
        </div>

        {/* Section heading 3 */}
        <div className="proj-side-pad" style={{ paddingTop: 'clamp(48px, 8.33vw, 120px)', paddingBottom: 'clamp(32px, 5.56vw, 80px)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-rm-neue)',
              fontSize: 'clamp(26px, 4.86vw, 70px)',
              fontWeight: 400,
              color: '#2176FF',
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

        {/* Final grid — 2-col */}
        <div className="proj-img-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {[
            { src: '/images/audit/grid1.png', alt: 'Audit trail detail — record entry' },
            { src: '/images/audit/grid2.png', alt: 'Audit trail detail — change log' },
            { src: '/images/audit/grid3.png', alt: 'Audit trail detail — user actions' },
            { src: '/images/audit/grid4.png', alt: 'Audit trail detail — timeline view' },
          ].map((img) => (
            <div key={img.src} style={{ boxSizing: 'border-box', width: 'calc(50% - 12px)' }}>
              <Image src={img.src} alt={img.alt} width={0} height={0} sizes="50vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>

        {/* End full width image */}
        <div className="proj-img-pad">
          <Image
            src="/images/audit/end.png"
            alt="Audit for LifeSciences — full system overview"
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
              Audit trails will never be the exciting part of lab software. But they&apos;re the part that has to be trusted.
              <br /><br />
              <strong>
                In-scope base: 120 customers (e.g. Pfizer, AstraZeneca, Novo Nordisk, etc)<br />
                Hours saved: ~103,000/year<br />
                Labour cost saved: ~£7.7m/year<br />
                Consolidation value: ~£1.1m/year<br />
                Total annual value: ~£11m (range ~£9.3m–£11.1m)
              </strong>
              <br /><br />
              Making them legible isn&apos;t decoration. It&apos;s how science stays accountable.
            </p>
          </div>
        </div>

        <ProjectNavBar currentHref="/project/audit-for-lifesciences" />
        <ProjectFooter />
      </div>
    </>
  );
}
