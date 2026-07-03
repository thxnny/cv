import { experience } from "@/data/cv";
import { TechInline } from "@/components/Tech";

export default function Experience() {
  return (
    <ol className="flex flex-col gap-14">
      {experience.map((job, i) => (
        <li key={job.company} className="group">
          {/* entry header */}
          <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-base font-bold tabular-nums text-copper">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                {job.title}
                <span className="block text-base font-normal text-muted sm:text-lg">
                  {job.company}
                </span>
              </h3>
            </div>
            <span className="shrink-0 pt-1 font-mono text-xs text-muted">{job.period}</span>
          </div>

          {/* projects */}
          <div className="mt-8 flex flex-col gap-8 sm:pl-9">
            {job.projects.map((p) => (
              <div key={p.name} className="border-l border-line pl-5 transition-colors hover:border-copper-deep">
                <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-copper">
                  {p.name}
                </h4>
                <div className="mt-3 flex gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/60">
                    stack
                  </span>
                  <TechInline items={p.stack} />
                </div>
                <ul className="mt-4 flex max-w-2xl flex-col gap-2.5">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-fg/85">
                      <span className="mt-3 h-px w-3 shrink-0 bg-copper-deep" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
