import { useRef, type ComponentType, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  AppWindow,
  Bot,
  Check,
  Database,
  FileText,
  Globe,
  LayoutTemplate,
  Layers,
  MessageSquare,
  Users,
} from 'lucide-react'
import { WordsPullUpMultiStyle } from './WordsPullUp'

const EASE = [0.22, 1, 0.36, 1] as const

const CREAM = '#DEDBC8'
const GRAY = '#9CA3AF'
const NODE_FILL = 'rgba(222, 219, 200, 0.05)'

type IconComponent = ComponentType<{
  className?: string
  x?: number | string
  y?: number | string
  width?: number | string
  height?: number | string
  color?: string
  strokeWidth?: number | string
  opacity?: number | string
}>

type FeatureCardProps = {
  index: number
  children: ReactNode
  className?: string
}

function FeatureCard({ index, children, className = '' }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- diagram primitives ---------- */

function Node({
  x,
  y,
  w,
  h,
  label,
  sub,
  icon: Icon,
  dashed = false,
}: {
  x: number
  y: number
  w: number
  h: number
  label: string
  sub?: string
  icon?: IconComponent
  dashed?: boolean
}) {
  const hasIcon = Boolean(Icon)
  const textX = hasIcon ? x + 32 : x + w / 2
  const anchor = hasIcon ? 'start' : 'middle'
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill={dashed ? 'none' : NODE_FILL}
        stroke={CREAM}
        strokeOpacity={dashed ? 0.3 : 0.4}
        strokeDasharray={dashed ? '4 4' : undefined}
      />
      {Icon && (
        <Icon
          x={x + 11}
          y={y + (h - 15) / 2}
          width={15}
          height={15}
          color={CREAM}
          strokeWidth={1.6}
          opacity={0.75}
        />
      )}
      <text
        x={textX}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 4}
        textAnchor={anchor}
        fill={CREAM}
        fontSize={11}
      >
        {label}
      </text>
      {sub && (
        <text x={textX} y={y + h / 2 + 11} textAnchor={anchor} fill={GRAY} fontSize={9}>
          {sub}
        </text>
      )}
    </g>
  )
}

function Arrow({ d, flow = false }: { d: string; flow?: boolean }) {
  return (
    <path
      d={d}
      className={flow ? 'flow-line' : undefined}
      fill="none"
      stroke={CREAM}
      strokeOpacity={flow ? 0.55 : 0.35}
      strokeWidth={1.2}
      markerEnd="url(#arrowhead)"
    />
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker
        id="arrowhead"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill={CREAM} fillOpacity={0.6} />
      </marker>
    </defs>
  )
}

const SVG_FONT = { fontFamily: "'IBM Plex Mono', monospace" }

/* ---------- diagrams ---------- */

function PlatformDiagram() {
  return (
    <svg
      viewBox="0 0 560 300"
      className="w-full"
      role="img"
      aria-label="Multi-tenant EKS platform architecture"
      style={SVG_FONT}
    >
      <ArrowDefs />

      {/* traffic */}
      <Node x={20} y={20} w={94} h={32} label="Users" icon={Users} />
      <Arrow d="M 114 36 H 140" />
      <Node x={144} y={20} w={148} h={32} label="Shared ALB" sub="wildcard TLS (ACM)" />
      <Arrow d="M 292 36 H 458 V 48" />

      {/* cluster */}
      <rect
        x={370}
        y={52}
        width={176}
        height={196}
        rx={12}
        fill={NODE_FILL}
        stroke={CREAM}
        strokeOpacity={0.5}
      />
      <text x={458} y={74} textAnchor="middle" fill={CREAM} fontSize={11} fontWeight={700}>
        AWS EKS cluster
      </text>
      <Node x={386} y={88} w={144} h={32} label="tenant-a" sub="isolated namespace" />
      <Node x={386} y={130} w={144} h={32} label="tenant-b" sub="isolated namespace" />
      <Node x={386} y={172} w={144} h={32} label="tenant-c" sub="isolated namespace" />
      <text x={458} y={232} textAnchor="middle" fill={GRAY} fontSize={9}>
        Pod Identity · IRSA
      </text>

      {/* delivery */}
      <Node x={20} y={110} w={124} h={32} label="GitHub Actions" sub="OIDC" />
      <Arrow d="M 144 126 H 166" flow />
      <Node x={170} y={110} w={60} h={32} label="ECR" />
      <Arrow d="M 230 126 H 256" flow />
      <Node x={260} y={110} w={90} h={32} label="ArgoCD" sub="app-of-apps" />
      <Arrow d="M 350 126 H 366" flow />

      {/* secrets */}
      <Node x={20} y={180} w={100} h={32} label="1Password" />
      <Arrow d="M 120 196 H 146" />
      <Node x={150} y={180} w={140} h={32} label="External Secrets" sub="operator" />
      <Arrow d="M 290 196 H 366" />

      {/* foundation */}
      <Node
        x={20}
        y={252}
        w={526}
        h={32}
        label="Terraform — VPC · EKS · RDS · ALB · Route53"
        icon={Layers}
        dashed
      />
    </svg>
  )
}

function PipelineDiagram() {
  return (
    <svg
      viewBox="0 0 560 200"
      className="w-full"
      role="img"
      aria-label="CI/CD pipeline flow"
      style={SVG_FONT}
    >
      <ArrowDefs />

      <Node x={20} y={24} w={90} h={36} label="git push" />
      <Arrow d="M 110 42 H 136" flow />
      <Node x={140} y={24} w={150} h={36} label="Change detection" sub="build only what changed" />
      <Arrow d="M 290 42 H 316" flow />
      <Node x={320} y={24} w={150} h={36} label="Docker build" sub="optimized layer cache" />
      <Arrow d="M 470 42 H 505 V 106 H 474" flow />

      <Node x={360} y={90} w={110} h={36} label="Push to ECR" />
      <Arrow d="M 360 108 H 314" flow />
      <Node x={190} y={90} w={120} h={36} label="ArgoCD sync" />
      <Arrow d="M 190 108 H 144" flow />
      <Node x={20} y={90} w={120} h={36} label="Deploy" sub="zero downtime" />

      <text x={20} y={170} fill={CREAM} fontSize={14} fontWeight={700}>
        ~70% shorter build times
      </text>
      <text x={20} y={186} fill={GRAY} fontSize={10}>
        5 Spring Boot + React microservices, one pipeline
      </text>
    </svg>
  )
}

function RetailDiagram() {
  return (
    <svg
      viewBox="0 0 560 210"
      className="w-full"
      role="img"
      aria-label="Retail storefront architecture"
      style={SVG_FONT}
    >
      <ArrowDefs />

      <Node x={20} y={30} w={106} h={40} label="Shoppers" icon={Users} />
      <Arrow d="M 126 50 H 148" />
      <Node x={152} y={30} w={122} h={40} label="Cloudflare" sub="DNS + CDN" icon={Globe} />
      <Arrow d="M 274 50 H 298" />
      <Node x={302} y={30} w={110} h={40} label="Astro" sub="SSR storefront" icon={LayoutTemplate} />
      <Arrow d="M 412 50 H 436" />
      <Node x={440} y={30} w={100} h={40} label="Payload" sub="headless CMS" icon={FileText} />
      <Arrow d="M 490 70 V 104" />
      <Node x={440} y={108} w={100} h={36} label="Postgres" icon={Database} />

      <Node
        x={20}
        y={164}
        w={520}
        h={32}
        label="deployed as a tenant on multi-tenant-eks"
        dashed
      />
    </svg>
  )
}

function HrmsDiagram() {
  return (
    <svg
      viewBox="0 0 560 210"
      className="w-full"
      role="img"
      aria-label="HR management system with Slack bot"
      style={SVG_FONT}
    >
      <ArrowDefs />

      <Node x={20} y={30} w={110} h={40} label="HR staff" icon={Users} />
      <Arrow d="M 130 50 H 164" />
      <Node x={168} y={30} w={152} h={40} label="Next.js HRMS" sub="server-side rendered" icon={AppWindow} />
      <Arrow d="M 320 50 H 354" />
      <Node x={358} y={30} w={152} h={40} label="Supabase" sub="stored procedures" icon={Database} />

      <Node x={20} y={130} w={110} h={40} label="Slack" icon={MessageSquare} />
      <Arrow d="M 130 150 H 164" />
      <Node x={168} y={130} w={152} h={40} label="Standup bot" sub="leave requests" icon={Bot} />
      <Arrow d="M 244 126 V 74" />

      <text x={358} y={150} fill={GRAY} fontSize={10}>
        staff never leave Slack —
      </text>
      <text x={358} y={164} fill={GRAY} fontSize={10}>
        the bot talks to the app
      </text>
    </svg>
  )
}

function BudgetDiagram() {
  return (
    <svg
      viewBox="0 0 560 210"
      className="w-full"
      role="img"
      aria-label="Project budget and payment platform architecture"
      style={SVG_FONT}
    >
      <ArrowDefs />

      <Node x={20} y={24} w={130} h={40} label="React SPA" sub="dashboards · forms" icon={AppWindow} />
      <Arrow d="M 150 44 H 184" />
      <Node x={188} y={24} w={150} h={40} label="NestJS API" sub="TypeORM · RLS" />
      <Arrow d="M 338 44 H 372" />
      <Node x={376} y={24} w={120} h={40} label="PostgreSQL" icon={Database} />

      <Node x={20} y={104} w={104} h={36} label="budget plan" />
      <Arrow d="M 124 122 H 148" flow />
      <Node x={152} y={104} w={110} h={36} label="approvals" sub="multi-step" />
      <Arrow d="M 262 122 H 286" flow />
      <Node x={290} y={104} w={100} h={36} label="payment" />
      <Arrow d="M 390 122 H 414" flow />
      <Node x={418} y={104} w={110} h={36} label="reconcile" />

      <Node
        x={20}
        y={164}
        w={520}
        h={32}
        label="multi-currency THB / LAK · exchange rates · source-of-fund splitting"
        dashed
      />
    </svg>
  )
}

function BlDiagram() {
  return (
    <svg
      viewBox="0 0 560 168"
      className="w-full"
      role="img"
      aria-label="AI Bill of Lading reconciliation flow"
      style={SVG_FONT}
    >
      <ArrowDefs />

      <Node x={20} y={20} w={130} h={30} label="Draft BL.pdf" icon={FileText} />
      <Node x={20} y={58} w={130} h={30} label="Particulars.pdf" icon={FileText} />
      <Arrow d="M 150 35 H 178 V 48" flow />
      <Arrow d="M 150 73 H 178 V 60" flow />
      <Node x={182} y={34} w={150} h={40} label="AI extraction" sub="Gemini Vision + Docling" icon={Bot} />
      <Arrow d="M 332 54 H 366" flow />
      <Node x={370} y={34} w={120} h={40} label="Compare" sub="22 fields" />
      <Arrow d="M 430 74 V 108" flow />
      <Node x={355} y={112} w={150} h={40} label="Highlighted PDF" sub="mismatches marked" icon={FileText} />

      <Node x={20} y={112} w={210} h={40} label="Carrier templates" sub="100+ tuned rule sets" dashed />
      <Arrow d="M 230 132 H 400 V 78" />
    </svg>
  )
}

/* ---------- cards ---------- */

type DiagramCardProps = {
  index: number
  title: string
  status: string
  diagram: ReactNode
  items: string[]
}

function DiagramCard({ index, title, status, diagram, items }: DiagramCardProps) {
  return (
    <FeatureCard index={index} className="flex flex-col rounded-2xl bg-[#212121] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-mono text-sm text-primary sm:text-base">{title}</h3>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] text-gray-400">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-ok" aria-hidden />
          {status}
        </span>
      </div>
      <div className="diagram-grid my-5 flex flex-1 items-center rounded-xl p-2 sm:p-3">{diagram}</div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="text-xs text-gray-400 sm:text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </FeatureCard>
  )
}

/* ---------- data ---------- */

const STATS = [
  { value: '−51%', label: 'platform cloud costs after network + node right-sizing' },
  { value: '~70%', label: 'faster CI builds with change detection + layer caching' },
  { value: '3 → 1', label: 'app tenants consolidated onto one shared EKS cluster' },
  { value: '3+ yrs', label: 'shipping production systems across the stack' },
]

/* ---------- section ---------- */

export default function Work() {
  return (
    <section id="work" className="relative min-h-screen bg-black px-4 py-16 sm:px-6 md:py-24">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <WordsPullUpMultiStyle
            segments={[{ text: 'Real production systems, none of them public.', className: '' }]}
            className="font-display text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ color: '#E1E0CC' }}
          />
          <br />
          <WordsPullUpMultiStyle
            segments={[
              { text: 'So here is how they work instead.', className: 'text-gray-500' },
            ]}
            className="text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-2 md:gap-2 lg:grid-cols-2">
          <DiagramCard
            index={0}
            title="multi-tenant-eks"
            status="Healthy · Synced"
            diagram={<PlatformDiagram />}
            items={[
              'Built from scratch on AWS EKS with a reusable Terraform tenant module',
              'Namespace-level isolation; secrets synced from 1Password via External Secrets',
              'New apps onboard with zero DNS or certificate work',
            ]}
          />
          <DiagramCard
            index={1}
            title="gitops-pipeline"
            status="Passing"
            diagram={<PipelineDiagram />}
            items={[
              'CI detects changed services and builds only those',
              'No static AWS credentials — GitHub OIDC, Pod Identity, IRSA',
              'ArgoCD app-of-apps keeps every deploy declarative and zero-downtime',
            ]}
          />
          <DiagramCard
            index={2}
            title="retail-storefront"
            status="Live"
            diagram={<RetailDiagram />}
            items={[
              'Headless CMS so the client team edits content without a developer',
              'Runs as a tenant on the multi-tenant EKS platform',
              'Infrastructure on AWS and DigitalOcean, managed with Terraform',
            ]}
          />
          <DiagramCard
            index={3}
            title="hrms-slack-bot"
            status="Deployed"
            diagram={<HrmsDiagram />}
            items={[
              'Requirements gathered directly from HR stakeholders',
              'Optimized PostgreSQL schema with stored procedures for complex queries',
              'Staff file standups and leave requests without leaving Slack',
            ]}
          />
          <DiagramCard
            index={4}
            title="budget-payment-platform"
            status="In production"
            diagram={<BudgetDiagram />}
            items={[
              'Full-stack features across a NestJS + TypeORM backend and React frontend',
              'Multi-currency payments (THB/LAK) with exchange rates and source-of-fund splitting',
              'Budget tracking with over-budget guards, dashboards, and row-level-security permission fixes',
            ]}
          />
          <DiagramCard
            index={5}
            title="bl-ai-reconciliation"
            status="Running daily"
            diagram={<BlDiagram />}
            items={[
              'Tuned the AI engine that compares draft Bills of Lading against shipping particulars across 22 fields',
              'Authored and tuned 100+ carrier-specific comparison templates to cut false mismatches',
              'Improved mismatch highlighting for multi-container, multi-seal documents',
            ]}
          />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:gap-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FeatureCard index={i} key={stat.value} className="rounded-2xl bg-[#212121] p-5 sm:p-6">
              <p className="font-mono text-3xl font-medium text-primary sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">{stat.label}</p>
            </FeatureCard>
          ))}
        </div>

      </div>
    </section>
  )
}
