import portfolioImage from "/Portfolio.webp";
import openApiPlaygroundImage from "/OpenAPIPlayground.webp";
import coffeeHouseImage from "/CoffeeHouse.jpg";

export const projects = [
  {
    id: "coffee-house",
    title: "Coffee House",
    role: "RS School · Frontend project",
    image: coffeeHouseImage,
    problem:
      "Turn a cafe design into a responsive website where visitors can explore drinks and customize their selections.",
    solution:
      "A two-page site built with HTML, CSS, and vanilla JavaScript, featuring a coffee carousel, filterable menu, product modals, and light and dark themes.",
    contributions: [
      "Built responsive layouts and mobile navigation with animated controls and Escape-key support.",
      "Rendered menu cards from JSON and implemented product customization with instant price updates.",
    ],
    outcome:
      "Deployed an interactive cafe website with category filtering, mobile Show More controls, and configurable drink sizes and extras.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://majestic-cobbler-72ebd1.netlify.app/",
    sourceUrl: "https://github.com/OlgaMinaievaWebDev/rsschool-landing-page",
  },
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
