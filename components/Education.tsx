import { education, languages } from "@/data/cv";

function Row({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-line py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
      <div className="font-mono text-xs uppercase tracking-[0.14em] text-copper sm:pt-1">{k}</div>
      <div className="text-fg/90">{children}</div>
    </div>
  );
}

export default function Education() {
  return (
    <div className="flex flex-col">
      <div className="grid gap-1 pb-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
        <div className="font-mono text-xs uppercase tracking-[0.14em] text-copper sm:pt-1">
          Institution
        </div>
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-xl font-semibold">{education.school}</span>
            <span className="font-mono text-xs text-muted">{education.period}</span>
          </div>
          <p className="mt-1 text-muted">{education.degree}</p>
        </div>
      </div>

      <Row k="GPA">
        <span className="font-mono">{education.gpa}</span> / 4.00
      </Row>

      <Row k="Coursework">
        <span className="text-muted">{education.coursework.join(" · ")}</span>
      </Row>

      <Row k="Languages">
        <div className="flex flex-col gap-1.5">
          {languages.map((l) => (
            <div key={l.name} className="flex items-baseline gap-3">
              <span>{l.name}</span>
              <span className="font-mono text-xs text-muted">{l.level}</span>
            </div>
          ))}
        </div>
      </Row>
    </div>
  );
}
