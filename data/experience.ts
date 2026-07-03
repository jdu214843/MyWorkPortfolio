export interface Experience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  location: string;
  description: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Fujifilm System Services",
    role: "Software Developer",
    startDate: "2024-04",
    endDate: null,
    location: "Japan",
    description: [
      "Developing and maintaining enterprise-level software systems at Fujifilm",
      "Collaborating with cross-functional teams in a professional Japanese tech environment",
      "Contributing to internal tools and client-facing applications",
    ],
    technologies: ["JavaScript", "TypeScript", "React", "Node.js"],
  },
  {
    id: 2,
    company: "Freelance",
    role: "Full Stack Developer",
    startDate: "2023-03",
    endDate: null,
    location: "Remote",
    description: [
      "Designed and built professional websites for Australian businesses including painting companies and restaurants",
      "Integrated AI chat support, booking systems, and payment flows into client projects",
      "Delivered pixel-perfect, mobile-first designs and fast-loading production deployments",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    id: 3,
    company: "Japan Digital University (JDU)",
    role: "Frontend Developer",
    startDate: "2021-09",
    endDate: "2023-02",
    location: "Japan",
    description: [
      "Contributed to the development of the university's portfolio platform",
      "Built responsive UI components and integrated RESTful APIs",
      "Collaborated with a team of developers using Git and agile workflows",
    ],
    technologies: ["React", "JavaScript", "CSS", "REST API"],
  },
  {
    id: 4,
    company: "Self-study & Personal Projects",
    role: "Junior Web Developer",
    startDate: "2020-01",
    endDate: "2021-08",
    location: "Uzbekistan",
    description: [
      "Built personal projects and clones to deepen knowledge of HTML, CSS, and JavaScript",
      "Learned React and modern frontend tooling through online courses and practice",
      "Published early projects on GitHub and received community feedback",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];
