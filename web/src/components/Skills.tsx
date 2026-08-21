import { useRef, type ComponentType, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Cloud, Database } from 'lucide-react'
import {
  SiAngular,
  SiArgo,
  SiAstro,
  SiCloudflare,
  SiDigitalocean,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGitlab,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiKubernetes,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiOpenjdk,
  SiPayloadcms,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from 'react-icons/si'
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

type IconComponent = ComponentType<{ className?: string }>

type StackItem = { name: string; icon?: IconComponent }

const SKILL_GROUPS: { label: string; items: StackItem[] }[] = [
  {
    label: 'languages:',
    items: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Go', icon: SiGo },
      { name: 'Java', icon: SiOpenjdk },
      { name: 'SQL', icon: Database },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS' },
    ],
  },
  {
    label: 'frameworks:',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue', icon: SiVuedotjs },
      { name: 'Angular', icon: SiAngular },
      { name: 'Astro', icon: SiAstro },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Echo' },
      { name: 'Payload CMS', icon: SiPayloadcms },
    ],
  },
  {
    label: 'devops:',
    items: [
      { name: 'AWS', icon: Cloud },
      { name: 'DigitalOcean', icon: SiDigitalocean },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'ArgoCD', icon: SiArgo },
      { name: 'Docker', icon: SiDocker },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'GitLab CI', icon: SiGitlab },
      { name: 'Cloudflare', icon: SiCloudflare },
      { name: 'Vercel', icon: SiVercel },
      { name: 'nginx', icon: SiNginx },
    ],
  },
  {
    label: 'databases:',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Oracle', icon: Database },
      { name: 'Redis', icon: SiRedis },
    ],
  },
  {
    label: 'other:',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Jira', icon: SiJira },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black px-4 py-8 sm:px-6 md:py-12">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-10">
          <WordsPullUpMultiStyle
            segments={[{ text: 'Skills', className: '' }]}
            className="font-display text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ color: '#E1E0CC' }}
          />
        </div>

        <Reveal index={0} className="rounded-2xl bg-[#212121] p-5 sm:p-6">
          <div className="flex flex-col gap-5">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <p className="w-36 shrink-0 font-mono text-xs text-gray-500 sm:text-sm">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map(({ name, icon: Icon }) => (
                    <span
                      key={name}
                      className="flex items-center gap-1.5 rounded-full border border-primary/25 px-3 py-1 font-mono text-[11px] lowercase text-primary/90"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5 opacity-75" />}
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <a
              href="https://github.com/thxnny"
              target="_blank"
              rel="noreferrer"
              className="group mt-1 flex items-center gap-1.5 font-mono text-xs text-primary sm:text-sm"
            >
              github.com/thxnny
              <ArrowRight className="h-4 w-4 -rotate-45 transition-transform group-hover:rotate-0" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
