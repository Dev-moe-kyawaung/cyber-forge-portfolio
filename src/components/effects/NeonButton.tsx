"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type NeonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
  asLink?: boolean;
  href?: string;
};

export function NeonButton({
  variant = "primary",
  children,
  className,
  asLink,
  href,
  ...props
}: NeonButtonProps) {
  const base =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-md font-semibold transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cf-neon-primary)]";

  const styles =
    variant === "primary"
      ? "bg-[var(--cf-surface-2)] text-[var(--cf-neon-primary)] border border-[var(--cf-border-strong)] shadow-[var(--cf-glow-primary)] hover:shadow-[0_0_24px_rgba(0,240,255,0.7)]"
      : "bg-[var(--cf-surface-2)] text-[var(--cf-neon-secondary)] border border-[var(--cf-border-strong)] shadow-[var(--cf-glow-secondary)] hover:shadow-[0_0_24px_rgba(255,0,255,0.7)]";

  if (asLink && href) {
    return (
      <a href={href} className={clsx(base, styles, className)} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={clsx(base, styles, className)} {...props}>
      {children}
    </button>
  );
}
