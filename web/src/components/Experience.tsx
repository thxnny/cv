import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Languages } from 'lucide-react'
import { WordsPullUpMultiStyle } from './WordsPullUp'

const EASE = [0.22, 1, 0.36, 1] as const

function Reveal({
  index,
  children,
  className = '',
}: {
  index: number
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

type Project = {
  name: string
  tech: string
  note: string
}

type Job = {
  role: string
  company: string
  period: string
  projects: Project[]
}

const JOBS: Job[] = [
  {
    role: 'Software Engineer / DevOps Engineer',
    company: 'Onify Company Limited',
    period: 'may 2025 — present',
    projects: [
      {
        name: 'Internal multi-tenant Kubernetes platform',
        tech: 'Terraform · AWS EKS · ArgoCD · GitHub OIDC',
        note: 'Built from scratch; GitOps delivery, zero-touch app onboarding, ~51% cloud-cost cut',
      },
      {
        name: 'Retail client website with headless CMS',
        tech: 'Astro · Payload CMS · PostgreSQL',
        note: 'Storefront the client team edits without a developer, deployed as a platform tenant',
      },
      {
        name: 'Cloud infrastructure & CI/CD',
        tech: 'AWS · DigitalOcean · Terraform · GitHub Actions · Vercel',
        note: 'Three environments, zero-downtime deploys, 3–5 releases a week',
      },
      {
        name: 'Government social welfare platform',
        tech: 'Kubernetes · GitHub Actions · GitLab CI · Docker · ArgoCD',
        note: 'CI/CD for 5 Spring Boot + React microservices; change detection and ~70% faster builds',
      },
      {
        name: 'Project budget & payment management platform',
        tech: 'React · NestJS · TypeORM · PostgreSQL',
        note: 'Multi-currency payments, reconciliation, budget tracking, and dashboards',
      },
      {
        name: 'AI Bill of Lading reconciliation system',
        tech: 'Python · Gemini · Docling OCR',
        note: 'Tuned the extractor and 100+ carrier templates to cut false mismatches',
      },
      {
        name: 'Hospital Information System',
        tech: 'Angular · Spring Boot · Node.js',
        note: 'Frontend features and microservice maintenance in a 15-member cross-functional team',
      },
    ],
  },
  {
    role: 'Developer Intern',
    company: 'Bluebik Vulcan Company Limited',
    period: 'nov 2024 — mar 2025',
    projects: [
      {
        name: 'Legal documents management system',
        tech: 'ReactJS · NestJS · TypeScript',
        note: 'Reusable UI components and comprehensive unit tests, translating requirements with Systems Analysts',
      },
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Trienpont International',
    period: 'apr 2024 — sep 2024',
    projects: [
      {
        name: 'HR management system',
        tech: 'Next.js · Supabase · TypeScript',
        note: 'Optimized PostgreSQL schema with stored procedures, SSR UI, and a Slack bot for standups and leave requests',
      },
      {
        name: 'Crypto game reviews & news platform',
        tech: 'Next.js · Strapi · TypeScript',
        note: 'Maintained a legacy codebase while improving page-load performance',
      },
      {
        name: 'E-commerce product data scraper',
        tech: 'JavaScript',
        note: 'Reverse-engineered site APIs; cron-driven pipeline exporting product data to CSV',
      },
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Computer Center, Burapha University',
    period: 'apr 2023 — mar 2024',
    projects: [
      {
        name: 'E-Office platform — 3 internal systems',
        tech: 'NestJS · VueJS · TypeScript',
        note: 'Sole developer for user management, help desk, and IT-clinic systems; integrated the legacy university user database and delivered all three on schedule',
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative bg-black px-4 py-16 sm:px-6 md:py-24">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <WordsPullUpMultiStyle
            segments={[{ text: 'Where the work happened.', className: '' }]}
            className="font-display text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ color: '#E1E0CC' }}
          />
        </div>

        <div className="flex flex-col gap-3">
          {JOBS.map((job, i) => (
            <Reveal key={job.company + job.period} index={i} className="rounded-2xl bg-[#212121] p-5 sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-mono text-sm text-primary sm:text-base">
                  {job.role}
                  <span className="text-gray-500"> · {job.company}</span>
                </h3>
                <span className="shrink-0 font-mono text-[10px] text-gray-400 sm:text-xs">
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-4">
                {job.projects.map((project) => (
                  <li
                    key={project.name}
                    className="grid grid-cols-1 gap-1 border-l border-primary/20 pl-4 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-4"
                  >
                    <div>
                      <p className="text-xs font-medium text-[#DEDBC8] sm:text-sm">{project.name}</p>
                      <p className="mt-0.5 font-mono text-[10px] lowercase text-gray-500">
                        {project.tech}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 sm:text-sm">{project.note}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <Reveal index={0} className="rounded-2xl bg-[#212121] p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <h3 className="font-mono text-sm text-primary sm:text-base">education</h3>
            </div>
            <p className="mt-4 text-sm text-[#DEDBC8]">
              Burapha University — BS in Computer Science
            </p>
            <p className="mt-1 font-mono text-[10px] text-gray-400 sm:text-xs">
              2021 — 2025 · first class honors · gpa 3.86
            </p>
            <p className="mt-3 text-xs text-gray-400 sm:text-sm">
              Relevant coursework: Web Development, Database Systems, Data Structures and
              Algorithms, Cloud Computing, Data Engineering
            </p>
          </Reveal>
          <Reveal index={1} className="rounded-2xl bg-[#212121] p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-primary" />
              <h3 className="font-mono text-sm text-primary sm:text-base">languages</h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-[#DEDBC8]">Thai</span>
                <span className="font-mono text-[10px] text-gray-400 sm:text-xs">native</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-[#DEDBC8]">English</span>
                <span className="font-mono text-[10px] text-gray-400 sm:text-xs">
                  b1 · toeic 690
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
