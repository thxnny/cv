import { education, languages } from "@/data/cv";

export default function Education() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-lg border border-border bg-surface p-6">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-semibold text-fg">{education.school}</h3>
          <span className="font-mono text-xs text-muted">{education.period}</span>
        </div>
        <p className="mt-1 text-sm text-accent">{education.degree}</p>
        <p className="mt-3 text-sm text-muted">
          GPA <span className="font-semibold text-fg">{education.gpa}</span>
        </p>
        <div className="mt-3">
          <p className="text-xs uppercase tracking-widest text-muted">Relevant coursework</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {education.coursework.map((c) => (
              <span
                key={c}
                className="rounded border border-border px-2 py-0.5 text-xs text-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-6">
        <h3 className="text-lg font-semibold text-fg">Languages</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {languages.map((l) => (
            <li key={l.name} className="flex items-baseline justify-between">
              <span className="text-sm text-fg">{l.name}</span>
              <span className="font-mono text-xs text-muted">{l.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
