import { LuMail, LuArrowRight, LuGithub } from "react-icons/lu";
import { profile, stats, experience } from "@/data/cv";

const current = experience[0];

const readout: { k: string; v: React.ReactNode }[] = [
  { k: "role", v: <><span className="text-fg">{current.title}</span> · {current.company}</> },
  { k: "based", v: <>{profile.location} · {profile.timezone}</> },
  { k: "since", v: <>2023 — shipping 2+ years</> },
  { k: "focus", v: <>AWS · Terraform · Kubernetes · Next.js</> },
];

export default function Hero() {
  return (
    <section className="border-b border-border py-20 sm:py-24" id="top">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* thesis */}
        <div>
          <p className="flex items-center gap-2 font-mono text-sm text-orange">
            <span className="text-accent">▸</span> full-stack // devops engineer
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            I <span className="text-accent">provision, ship, and operate</span> production systems.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted lg:text-xl">
            From Terraform and Kubernetes to the React frontend.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-orange"
            >
              <LuMail className="h-4 w-4" /> Get in touch
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-sm transition-colors hover:border-orange hover:text-orange"
            >
              View work <LuArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-sm transition-colors hover:border-orange hover:text-orange"
            >
              <LuGithub className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        {/* service status readout — the signature */}
        <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface/70 font-mono backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3.5">
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted">service status</span>
            <span className="flex items-center gap-2 text-[12px]">
              <span className="led inline-block h-2 w-2 rounded-full bg-orange" />
              available for work
            </span>
          </div>

          <dl className="divide-y divide-border">
            {readout.map((r) => (
              <div key={r.k} className="flex gap-4 px-5 py-3 text-[13px]">
                <dt className="w-12 shrink-0 text-muted">{r.k}</dt>
                <dd className="min-w-0 break-words text-muted">{r.v}</dd>
              </div>
            ))}
          </dl>

          <div className="grid grid-cols-2 gap-px border-t border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-3 py-4 text-center">
                <div className="text-2xl font-bold tabular-nums text-orange">{s.value}</div>
                <div className="mt-1 text-[10px] uppercase leading-tight tracking-wide text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
