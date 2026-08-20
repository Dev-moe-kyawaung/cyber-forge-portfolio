"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="cf-card overflow-hidden">
        <div className="relative aspect-video w-full bg-[var(--cf-bg-elev)]">
          {/* Replace with real image in /public/projects */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="cf-heading-md mb-1 group-hover:text-[var(--cf-neon-primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--cf-text-dim)] mb-3">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-[var(--cf-bg-elev)] border border-[var(--cf-border)] text-[var(--cf-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
