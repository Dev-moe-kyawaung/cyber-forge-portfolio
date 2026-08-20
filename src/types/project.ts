export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  highlights: string[];
  techStack: string[];
  role: string;
  period: string;
}
