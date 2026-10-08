// src/lib/data.ts
export interface Project {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  engineeringHighlight: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Dipansh Gore",
  title: "Full-Stack & MERN Engineer",
  location: "Maharashtra, India",
  email: "dgore7078@gmail.com",
  github: "https://github.com/dipanshgore",
  linkedin: "https://linkedin.com/in/dipanshgore",
  summary:
    "Full-Stack Engineer specializing in React 19, Next.js, and real-time systems. Experienced in architecting race-condition-free state, WebSocket streaming, and scalable REST services.",
};

export const PROJECTS: Project[] = [
  {
    title: "Product Admin Dashboard",
    badge: "Next.js App Router",
    tagline: "High-performance admin platform with URL-synced search and state persistence.",
    description:
      "Engineered an administrative dashboard maintaining 100% deep-link fidelity across pagination and multi-category filters using searchParams.",
    engineeringHighlight:
      "Eliminated asynchronous data race conditions during rapid typing by coupling a 400ms debounce with native AbortController cancellation signals.",
    tags: ["Next.js", "React 19", "Tailwind CSS", "AbortController", "Vercel"],
 
    githubUrl: "https://github.com/DipanshGore/product-admin-dashboard",
  },
  {
    title: "Real-Time Chat Application",
    badge: "Distributed WebSockets",
    tagline: "Instant messaging infrastructure with live presence and session security.",
    description:
      "Engineered a full-stack real-time collaboration app handling multi-client event broadcasting, live typing indicators, and media pipelines.",
    engineeringHighlight:
      "Secured WebSocket handshakes with JWT authentication and integrated Cloudinary stream processing for zero-latency asset dispatch.",
    tags: ["Socket.io", "Node.js", "Express", "MongoDB Atlas", "JWT", "Render"],
    liveUrl: "https://fullstack-chat-application-ylw0.onrender.com", // Normalized URL
    githubUrl: "https://github.com/DipanshGore/Fullstack-Chat-Application",
  },
  {
    title: "Agri-Zone B2B Marketplace",
    badge: "Multi-Role Commerce",
    tagline: "B2B exchange engine connecting regional agricultural producers with buyers.",
    description:
      "Architected client-side routing across 10 distinct layouts and implemented multi-tier role-based access control (RBAC).",
    engineeringHighlight:
      "Designed and documented 15+ REST endpoints with custom authorization middleware for transactional order flows.",
    tags: ["React", "Express.js", "MongoDB", "RBAC", "REST Architecture"],
    githubUrl: "https://github.com/DipanshGore/agrizone",
  },
];

export const SKILL_GROUPS = [
  {
    category: "Frontend & Architecture",
    skills: ["React 19", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
  },
  {
    category: "Backend & Streaming",
    skills: ["Node.js", "Express.js", "Socket.io (WebSockets)", "RESTful APIs", "JWT Auth"],
  },
  {
    category: "Databases & Cloud",
    skills: ["MongoDB Atlas", "SQL", "Vercel", "Render", "Postman", "CI/CD Actions"],
  },
];

// Add this to the bottom of your src/lib/data.ts file



export const CERTIFICATIONS = [
  { 
    name: "AWS Educate Introduction to Cloud 101", 
    issuer: "Amazon" 
  },
  { 
    name: "MERN Stack Developer", 
    issuer: "JSpiders Hyderabad" 
  },
  { 
    name: "Build a Website with WordPress", 
    issuer: "Coursera" 
  },
  { 
    name: "Introduction to Next.js", 
    issuer: "Coursera"
  },
  { 
    name: "What Is Generative AI", 
    issuer: "Linkedin Learning"
  },
  { 
    name: "Generative AI Mastermind", 
    issuer: "OutSkill"
  }
];

export const SOFT_SKILLS = [
  "Agile Team Collaboration",
  "Technical Documentation",
  "Cross-functional Communication",
  "Rapid Problem Solving",
  "Adaptability to AI Tooling (Copilot/Cursor)"
];

// Add this to the bottom of src/lib/data.ts

export const CURRENTLY_LEARNING = [
  {
    id: "01",
    title: "Next.js",
    focus: "App Router • Server Components • Server Actions • SSR/SSG",
    evidence: "Building → Admin Dashboard",
    link: "#projects",
  },
  {
    id: "02",
    title: "TypeScript",
    focus: "Types • Interfaces • Generics • Utility Types",
    evidence: "Applying in → Full-Stack Projects",
  },
  {
    id: "03",
    title: "Modern Frontend Architecture",
    focus: "Component isolation • State management • Data fetching",
    evidence: "Improving → Existing Architectures",
  },
  {
    id: "04",
    title: "Performance & Accessibility",
    focus: "Core Web Vitals • Image optimization • Semantic HTML",
    evidence: "Optimizing → Lighthouse Scores",
  },
  {
    id: "05",
    title: "AI-Powered Development",
    focus: "LLM APIs • Prompt engineering • AI-assisted verification",
    evidence: "Exploring → AI-powered Web Features",
  },
];