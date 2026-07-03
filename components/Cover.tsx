import { LuArrowUpRight } from "react-icons/lu";
import { profile, experience, skills } from "@/data/cv";

const projectCount = experience.reduce((n, j) => n + j.projects.length, 0);
const techCount = skills.reduce((n, g) => n + g.items.length, 0);

const figures = [
  { n: String(experience.length).padStart(2, "0"), label: "teams" },
  { n: String(projectCount).padStart(2, "0"), label: "projects" },
  { n: "2+", label: "years" },
  { n: `${Math.floor(techCount / 5) * 5}+`, label: "tech" },
];

export default function Cover() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="contours pointer-events-none absolute inset-0" aria-hidden />
      <div className="cover-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-[1080px] px-6 pb-20 pt-16 sm:pt-24 lg:px-10">
        {/* masthead */}
        <div className="cv-in flex items-center justify-between gap-3 border-b border-line pb-5 font-mono text-xs uppercase tracking-[0.18em]">
          <span className="text-copper">Full-stack / DevOps engineer</span>
          {profile.available && (
            <span className="flex items-center gap-2 text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-copper" />
              available
            </span>
          )}
        </div>

        <h1
          className="cv-in mt-10 text-[3.4rem] font-bold leading-[0.9] tracking-tight sm:text-8xl"
          style={{ animationDelay: "0.08s" }}
        >
          Than
          <br />
          Chayawik
        </h1>

        <p
          className="cv-in mt-8 max-w-2xl text-xl leading-snug text-fg/90 sm:text-2xl"
          style={{ animationDelay: "0.16s" }}
        >
          I provision, ship, and operate production systems — from Terraform to the frontend.
        </p>

        {/* key figures */}
        <dl
          className="cv-in mt-10 flex flex-wrap items-end gap-x-10 gap-y-4"
          style={{ animationDelay: "0.24s" }}
        >
          {figures.map((f) => (
            <div key={f.label} className="flex items-baseline gap-2">
              <dt className="font-mono text-2xl font-bold tabular-nums text-copper">{f.n}</dt>
              <dd className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {f.label}
              </dd>
            </div>
          ))}
        </dl>

        <div
          className="cv-in mt-10 flex flex-wrap gap-3 font-mono text-[13px]"
          style={{ animationDelay: "0.32s" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-copper px-5 py-2.5 font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-md border border-line px-5 py-2.5 text-fg transition-colors hover:border-copper hover:text-copper"
          >
            GitHub
            <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
