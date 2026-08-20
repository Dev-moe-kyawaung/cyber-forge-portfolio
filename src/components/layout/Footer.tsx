import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--cf-border)]">
      <div className="cf-container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--cf-text-muted)]">
          © {new Date().getFullYear()} Cyber·Forge. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="https://github.com/yourusername" className="text-[var(--cf-text-dim)] hover:text-[var(--cf-text)]">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/yourusername" className="text-[var(--cf-text-dim)] hover:text-[var(--cf-text)]">
            LinkedIn
          </Link>
          <a href="mailto:you@example.com" className="text-[var(--cf-text-dim)] hover:text-[var(--cf-text)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
