import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cf: {
          bg: "var(--cf-bg)",
          "bg-elev": "var(--cf-bg-elev)",
          surface: "var(--cf-surface)",
          "surface-2": "var(--cf-surface-2)",
          text: "var(--cf-text)",
          "text-dim": "var(--cf-text-dim)",
          "text-muted": "var(--cf-text-muted)",
          "neon-primary": "var(--cf-neon-primary)",
          "neon-secondary": "var(--cf-neon-secondary)",
          "neon-accent": "var(--cf-neon-accent)",
          border: "var(--cf-border)",
          "border-strong": "var(--cf-border-strong)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
