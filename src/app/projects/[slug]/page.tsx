import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { NeonButton } from "@/components/effects/NeonButton";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectCaseStudy({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="cf-section">
      <div className="cf-container max-w-4xl">
        <div className="mb-6">
          <Link
            href="/projects"
            className="text-sm text-[var(--cf-text-muted)] hover:text-[var(--cf-text)]"
          >
            ← All Projects
          </Link>
        </div>

        <h1 className="cf-heading-xl mb-2">
          {project.title}{" "}
          <span className="cf-neon-text-primary">Case Study</span>
        </h1>
        <p className="text-[var(--cf-text-dim)] mb-6">{project.description}</p>

        <div className="cf-card overflow-hidden mb-8">
          <div className="relative aspect-video w-full bg-[var(--cf-bg-elev)]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <InfoBlock label="Role" value={project.role} />
          <InfoBlock label="Period" value={project.period} />
          <InfoBlock
            label="Links"
            value={
              <div className="flex flex-wrap gap-2">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--cf-neon-primary)] hover:underline"
                  >
                    Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--cf-neon-secondary)] hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            }
          />
        </div>

        <div className="mb-8">
          <h2 className="cf-heading-md mb-3">Highlights</h2>
          <ul className="list-disc pl-5 space-y-1 text-[var(--cf-text-dim)]">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="cf-heading-md mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md bg-[var(--cf-bg-elev)] border border-[var(--cf-border)] text-[var(--cf-text-muted)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="cf-heading-md mb-3">Overview</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-[var(--cf-text-dim)]">
              {/* Expand this with your full case study narrative */}
              Describe the problem, your approach, architecture decisions, and key
              outcomes. Include diagrams, code snippets, and performance metrics as
              needed.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          {project.repoUrl && (
            <NeonButton asLink href={project.repoUrl}>
              View Code
            </NeonButton>
          )}
          {project.liveUrl && (
            <NeonButton variant="secondary" asLink href={project.liveUrl}>
              Open Live Demo
            </NeonButton>
          )}
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="cf-card p-4">
      <div className="text-xs uppercase tracking-widest text-[var(--cf-text-muted)] mb-1">
        {label}
      </div>
      <div className="text-[var(--cf-text)]">{value}</div>
    </div>
  );
}
