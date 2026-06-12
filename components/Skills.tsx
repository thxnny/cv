import { skills } from "@/data/cv";

export default function Skills() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
      {skills.map((group) => (
        <div key={group.group} className="bg-surface p-5">
          <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            {group.group}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="rounded-md bg-bg px-2.5 py-1 text-sm text-fg">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
