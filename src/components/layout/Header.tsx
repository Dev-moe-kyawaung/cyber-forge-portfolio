"use client";

import Link from "next/link";
import { useState } from "react";
import { GlitchText } from "@/components/effects/GlitchText";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="cf-neon-grid-bg">
      <div className="cf-container">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="cf-heading-md">
            <GlitchText text="CYBER·FORGE" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#projects" className="text-sm text-[var(--cf-text-dim)] hover:text-[var(--cf-text)]">
              Projects
            </Link>
            <Link href="/#about" className="text-sm text-[var(--cf-text-dim)] hover:text-[var(--cf-text)]">
              About
            </Link>
            <Link href="/projects" className="text-sm text-[var(--cf-text-dim)] hover:text-[var(--cf-text)]">
              All Projects
            </Link>
            <a
              href="mailto:you@example.com"
              className="text-sm text-[var(--cf-neon-primary)] hover:underline"
            >
              Contact
            </a>
          </nav>

          <button
            className="md:hidden text-[var(--cf-text)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5">
            <div className="flex flex-col gap-3">
              <Link href="/#projects" className="text-sm text-[var(--cf-text-dim)]">
                Projects
              </Link>
              <Link href="/#about" className="text-sm text-[var(--cf-text-dim)]">
                About
              </Link>
              <Link href="/projects" className="text-sm text-[var(--cf-text-dim)]">
                All Projects
              </Link>
              <a href="mailto:you@example.com" className="text-sm text-[var(--cf-neon-primary)]">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
