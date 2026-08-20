import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    slug: "neon-task",
    title: "Neon Task",
    shortDescription:
      "A cyberpunk-styled task manager with real-time sync and offline support.",
    description:
      "Neon Task is a PWA task manager built with Next.js 15, Tailwind, and a Kotlin Ktor backend. It features optimistic UI updates, end-to-end encryption, and a fully offline-capable experience.",
    image: "/projects/neon-task.jpg",
    tags: ["Next.js", "Tailwind", "Ktor", "PWA"],
    repoUrl: "https://github.com/yourusername/neon-task",
    liveUrl: "https://neon-task.example.com",
    highlights: [
      "Offline-first architecture with service workers",
      "Real-time sync via WebSockets",
      "End-to-end encrypted tasks",
    ],
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Ktor",
      "PostgreSQL",
    ],
    role: "Full-stack developer",
    period: "2024–2025",
  },
  {
    slug: "cyber-portfolio",
    title: "Cyber Portfolio",
    shortDescription:
      "A high-performance portfolio site with 3D animations and glassmorphism.",
    description:
      "A portfolio template showcasing advanced frontend techniques: Three.js backgrounds, Framer Motion animations, and a modular component architecture.",
    image: "/projects/cyber-portfolio.jpg",
    tags: ["Next.js", "Three.js", "Framer Motion"],
    repoUrl: "https://github.com/yourusername/cyber-portfolio",
    liveUrl: "https://cyber-portfolio.example.com",
    highlights: [
      "Three.js animated background",
      "Glassmorphic UI components",
      "Lighthouse score 98+",
    ],
    techStack: ["Next.js 15", "React 18", "Three.js", "Framer Motion"],
    role: "Frontend engineer",
    period: "2025",
  },
  // Add more projects as needed
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
