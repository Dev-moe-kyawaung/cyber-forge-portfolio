"use client";

import { GlitchText } from "@/components/effects/GlitchText";
import { NeonButton } from "@/components/effects/NeonButton";
import { HeroBackground } from "@/components/effects/HeroBackground";

export function HeroSection() {
  return (
    <section className="cf-section cf-neon-grid-bg relative overflow-hidden">
      <HeroBackground />
      <div className="cf-container relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-[var(--cf-text-muted)] mb-3">
            Senior Android & Full‑Stack Developer
          </p>
          <h1 className="cf-heading-xl mb-4">
            <GlitchText text="Building Cyber‑Grade Digital Experiences" />
          </h1>
          <p className="text-[var(--cf-text-dim)] mb-6">
            I design and build high‑performance web and mobile apps with a focus on
            modern UI/UX, clean architecture, and automated deployment.
          </p>
          <div className="flex flex-wrap gap-3">
            <NeonButton asLink href="/projects">
              View Projects
            </NeonButton>
            <NeonButton variant="secondary" asLink href="/#about">
              About Me
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  );
}
