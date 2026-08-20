export function AboutSection() {
  return (
    <section id="about" className="cf-section">
      <div className="cf-container max-w-3xl">
        <h2 className="cf-heading-lg mb-4">
          About <span className="cf-neon-text-secondary">Me</span>
        </h2>
        <p className="text-[var(--cf-text-dim)] mb-4">
          I’m a senior Android and full‑stack developer based in Bexley, England.
          I specialize in Kotlin, Next.js, and modern frontend stacks, with a strong
          focus on performance, design quality, and CI/CD automation.
        </p>
        <p className="text-[var(--cf-text-dim)] mb-4">
          My work spans from advanced Android apps with Jetpack to production‑ready
          Next.js portfolios and Kotlin Ktor backends with comprehensive integration
          testing.
        </p>
        <p className="text-[var(--cf-text-dim)]">
          I enjoy blending English and Burmese in technical content, experimenting
          with neon/glassmorphic UIs, and shipping polished, automated deployments.
        </p>
      </div>
    </section>
  );
}
