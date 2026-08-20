import { PROJECTS } from "@/lib/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { NeonButton } from "@/components/effects/NeonButton";

export function ProjectsSection() {
  return (
    <section id="projects" className="cf-section">
      <div className="cf-container">
        <div className="flex items-end justify-between mb-6">
          <h2 className="cf-heading-lg">
            Selected <span className="cf-neon-text-primary">Projects</span>
          </h2>
          <NeonButton asLink href="/projects">
            See All
          </NeonButton>
        </div>
        <ProjectGrid projects={PROJECTS.slice(0, 6)} />
      </div>
    </section>
  );
}
