export const profile = {
  name: "Than Chayawik",
  role: "Full-Stack Software Engineer",
  summary:
    "Full-stack software engineer with experience across web development, cloud infrastructure, and DevOps. I build and ship production systems with React, Next.js, Spring Boot and NestJS while managing AWS infrastructure with Terraform and CI/CD pipelines. I enjoy working in international, cross-cultural teams.",
  location: "Thailand",
  email: "thanc.work@gmail.com",
  phone: "+66 95 938 9589",
  github: "https://github.com/thxnny",
  githubHandle: "thxnny",
  linkedin: "https://www.linkedin.com/in/than-chayawik-8a1b92321/",
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  projects: {
    name: string;
    stack: string[];
    highlights: string[];
  }[];
};

export const experience: Experience[] = [
  {
    company: "Onify Company Limited",
    title: "Junior Software Engineer",
    period: "May 2025 – Present",
    projects: [
      {
        name: "Cloud Infrastructure & DevOps",
        stack: ["AWS", "Terraform", "GitHub Actions", "Vercel"],
        highlights: [
          "Provision and manage cloud infrastructure on AWS (VPC, ECS, ECR, RDS, ALB, Route53) using Terraform for repeatable, version-controlled deployments across 3 environments (Staging, UAT, Production).",
          "Build and maintain CI/CD pipelines with GitHub Actions, enabling zero-downtime deployments with 3–5 releases per week.",
          "Deploy Next.js applications on Vercel and manage application secrets securely.",
        ],
      },
      {
        name: "Government Social Welfare Platform",
        stack: ["Kubernetes", "GitHub Actions", "GitLab CI", "Docker", "ArgoCD"],
        highlights: [
          "Design and maintain CI/CD pipelines with GitHub Actions and GitLab CI for 5 microservices (Spring Boot + React), using change detection to selectively build and deploy only affected services.",
          "Implement a GitOps workflow with ArgoCD and a dedicated infrastructure repo, automating Kubernetes manifest generation and achieving zero-downtime deployments.",
          "Build multi-stage Docker images for Java and React services, including gzip pre-compression of frontend assets for optimized delivery via nginx.",
          "Optimize Dockerfiles by splitting dependency install into a dedicated layer to leverage Docker layer caching, reducing build times by ~70%.",
          "Manage GitHub-to-GitLab monorepo sync using git subtree, maintaining separate service repos for controlled release branching across Dev, UAT, and Production.",
          "Set up HTTPS reverse proxy bridging for secure communication between internal services and external government APIs.",
        ],
      },
      {
        name: "Hospital Information System (HIS)",
        stack: ["Angular", "Spring Boot", "Node.js"],
        highlights: [
          "Develop Angular frontend features based on Figma designs from the UX/UI team, implementing complex business logic defined by Business Analysts.",
          "Manage and maintain a microservices backend built with Spring Boot and Node.js.",
          "Collaborate within a 15-member cross-functional team of frontend developers, backend engineers, BAs, and UX/UI designers.",
        ],
      },
    ],
  },
  {
    company: "Bluebik Vulcan Company Limited",
    title: "Developer Intern",
    period: "Nov 2024 – Mar 2025",
    projects: [
      {
        name: "Legal Documents Management System",
        stack: ["ReactJS", "NestJS", "TypeScript"],
        highlights: [
          "Collaborated with Systems Analysts to design features and translate requirements into implementation.",
          "Built reusable UI components to improve consistency and reduce duplication across the application.",
          "Wrote comprehensive unit tests to ensure code reliability and prevent regressions.",
        ],
      },
    ],
  },
  {
    company: "Trienpont International",
    title: "Full-Stack Developer Intern",
    period: "Apr 2024 – Sep 2024",
    projects: [
      {
        name: "Human Resource Management System",
        stack: ["Next.js", "Supabase", "TypeScript"],
        highlights: [
          "Gathered requirements directly from HR stakeholders and collaborated with Senior Engineers to architect the solution.",
          "Designed an optimized PostgreSQL schema with stored procedures for complex query logic.",
          "Built a responsive, server-side rendered UI for improved performance and SEO.",
          "Developed a custom Slack bot for daily standup reporting and leave requests, letting staff interact with internal tools directly from Slack.",
        ],
      },
      {
        name: "Crypto Game Reviews & News Platform",
        stack: ["Next.js", "Strapi", "TypeScript"],
        highlights: [
          "Maintained and enhanced a legacy codebase while improving page load performance and implementing new client-requested features.",
        ],
      },
      {
        name: "E-Commerce Product Data Scraper",
        stack: ["JavaScript"],
        highlights: [
          "Reverse-engineered website APIs and built an automated data pipeline with cron jobs to extract and export product data to CSV for analytics.",
        ],
      },
    ],
  },
  {
    company: "Computer Center, Burapha University",
    title: "Full-Stack Developer Intern",
    period: "Apr 2023 – Mar 2024",
    projects: [
      {
        name: "E-Office Platform: 3 Internal Systems (User Management, Help Desk, IT-Clinic)",
        stack: ["NestJS", "VueJS", "TypeScript"],
        highlights: [
          "Independently built three internal web applications end-to-end after gathering requirements from university administrative staff.",
          "Integrated APIs with the university's complex legacy user database, ensuring secure access and optimized query performance.",
          "Delivered all three systems on schedule as the sole developer, resolving technical challenges through self-directed research.",
        ],
      },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Go", "Java", "HTML", "CSS", "SQL"] },
  { group: "Frameworks", items: ["NestJS", "Spring Boot", "Echo", "Next.js", "ReactJS", "VueJS", "Angular"] },
  { group: "Database", items: ["PostgreSQL", "MySQL", "Oracle", "Redis"] },
  { group: "DevOps", items: ["AWS", "Kubernetes", "ArgoCD", "Docker", "Terraform", "GitHub Actions", "GitLab CI", "Vercel"] },
  { group: "Other", items: ["Git", "nginx", "Tailwind CSS", "Supabase", "Jira"] },
];

export const education = {
  school: "Burapha University",
  degree: "B.S. in Computer Science (First Class Honors)",
  period: "2021 – 2025",
  gpa: "3.86",
  coursework: ["Web Development", "Database Systems", "Data Structures & Algorithms", "Cloud Computing", "Data Engineering"],
};

export const languages = [
  { name: "Thai", level: "Native" },
  { name: "English", level: "B1 (TOEIC 690)" },
];
