import Link from "next/link";

export default function NotFound() {
  return (
    <section className="cf-section cf-neon-grid-bg">
      <div className="cf-container max-w-md text-center">
        <h1 className="cf-heading-xl mb-3">
          <span className="cf-neon-text-secondary">404</span>
        </h1>
        <p className="text-[var(--cf-text-dim)] mb-6">
          This page doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-[var(--cf-neon-primary)] hover:underline"
        >
          Go back home
        </Link>
      </div>
    </section>
  );
}
