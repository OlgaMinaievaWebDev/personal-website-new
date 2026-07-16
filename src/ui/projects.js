import portfolioImage from "/Portfolio.webp";
import openApiPlaygroundImage from "/OpenAPIPlayground.webp";

export const projects = [
  {
    id: "openapi-playground",
    title: "OpenAPI Playground",
    role: "Team Lead · 3-person team",
    image: openApiPlaygroundImage,
    problem:
      "Give developers one workspace to create, understand, and test OpenAPI specifications.",
    solution:
      "A full-stack editor with schema validation, endpoint previews, authentication, saved data, and API execution through a server proxy.",
    contributions: [
      "Led a three-person team, shaped the frontend architecture, coordinated delivery, and reviewed pull requests.",
      "Implemented authentication, Supabase data flows, and REST API execution through a Next.js server proxy.",
    ],
    outcome:
      "Delivered a deployed playground with schema editing and validation, endpoint previews, Try-It-Out requests, saved schemas, and protected history.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "OpenAPI"],
    liveUrl: "https://swagger-editor-app-amber.vercel.app/en",
    sourceUrl: "https://github.com/OlgaMinaievaWebDev/swagger-editor-app",
  },
  {
    id: "portfolio",
    title: "Frontend Engineer Portfolio",
    image: portfolioImage,
    problem:
      "Present my frontend experience clearly to recruiters and collaborators.",
    solution:
      "A responsive, accessible portfolio with optimized assets, focused case studies, SEO, tests, and automated checks.",
    contributions: [
      "Built reusable React components and responsive, keyboard-accessible layouts.",
      "Added optimized assets, social metadata, component tests, and CI checks.",
    ],
    outcome:
      "Reached Lighthouse scores of 95 Performance and 100 for Accessibility, Best Practices, and SEO, backed by ten passing component tests.",
    technologies: ["React", "Vite", "Tailwind CSS", "Vitest"],
    liveUrl: "https://olga-minaieva.vercel.app/",
    sourceUrl: "https://github.com/OlgaMinaievaWebDev/personal-website-new",
  },
];
