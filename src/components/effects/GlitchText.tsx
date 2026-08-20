"use client";

export function GlitchText({ text }: { text: string }) {
  return (
    <span className="cf-glitch cf-glitch-hover" data-text={text}>
      {text}
    </span>
  );
}
