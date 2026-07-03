export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  contributed?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Prime Coat Painters",
    description:
      "Professional painting company website for Sydney with AI chat support, detailed service listings, on-site quote system, and full mobile responsiveness.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI Chat"],
    liveUrl: "https://primecoatpainters.com.au",
    featured: true,
  },
  {
    id: 2,
    title: "Any Time Painting",
    description:
      "Modern painting service website for a Sydney-based company — clean UI, service showcase, customer reviews, and a contact system.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://anytimepainting.com.au",
    featured: true,
  },
  {
    id: 3,
    title: "TASHKENT Restaurant",
    description:
      "Full-featured restaurant website for Sydney's first authentic Uzbek restaurant — interactive menu, table reservations, gallery, and contact form.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://aus-restoran.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "JDU Portfolio",
    description:
      "Japan Digital University portfolio platform — contributed to the front-end development of the institutional portfolio website.",
    technologies: ["Web Development", "Frontend"],
    liveUrl: "https://portfolio.jdu.uz",
    featured: false,
    contributed: true,
  },
];
