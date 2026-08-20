import { PROJECTS } from "@/lib/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata = {
  title: "Projects | Cyber·Forge",
  description: "Selected projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <section className="cf-section">
      <div className="cf-container">
        <h1 className="cf-heading-xl mb-2">
          All <span className="cf-neon-text-primary">Projects</span>
        </h1>
        <p className="text-[var(--cf-text-dim)] mb-8 max-w-2xl">
          A collection of web, mobile, and full‑stack projects with detailed case
          studies.
        </p>
        <ProjectGrid projects={PROJECTS} />
      </div>
    </section>
  );
}
