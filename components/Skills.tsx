import { skills } from "@/data/cv";
import { TechInline } from "@/components/Tech";

export default function Skills() {
  return (
    <dl className="flex flex-col">
      {skills.map((group, i) => (
        <div
          key={group.group}
          className={`grid gap-2 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6 ${
            i > 0 ? "border-t border-line" : "pt-0"
          }`}
        >
          <dt className="font-mono text-xs uppercase tracking-[0.14em] text-copper sm:pt-1">
            {group.group}
          </dt>
          <dd>
            <TechInline items={group.items} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
