import { experience } from "@/data/cv";

export default function Experience() {
  return (
    <div className="flex flex-col gap-12">
      {experience.map((job) => (
        <div key={job.company} className="border-l border-border pl-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-fg">
              {job.title}{" "}
              <span className="text-accent">· {job.company}</span>
            </h3>
            <span className="font-mono text-xs text-muted">{job.period}</span>
          </div>

          <div className="mt-5 flex flex-col gap-6">
            {job.projects.map((p) => (
              <div key={p.name}>
                <h4 className="text-sm font-semibold text-fg">{p.name}</h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
