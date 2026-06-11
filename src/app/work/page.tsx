import { WorkList } from "@/components/WorkList";
import { ProjectFooter } from "@/components/ProjectFooter";

export const metadata = {
  title: "Work — Kshitij Gotiwale",
  description: "Independent art director, brand designer, and illustrator based in London, United Kingdom and Mumbai, India.",
};

export default function WorkPage() {
  return (
    <div style={{ backgroundColor: '#F9F9F9', minHeight: '100vh' }}>
      <main>
        <WorkList />
        <ProjectFooter />
      </main>
    </div>
  );
}
