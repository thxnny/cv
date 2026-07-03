import { techIcons } from "@/data/tech";

// Monochrome on the dark dossier — icons inherit the text tone for cohesion,
// avoiding clashing brand colors (and invisible dark logos) on the petrol ground.
export function TechInline({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {items.map((name) => {
        const t = techIcons[name];
        return (
          <span key={name} className="inline-flex items-center gap-2 text-[14px] text-muted">
            {t && <t.Icon aria-hidden className="h-4 w-4 shrink-0 opacity-80" />}
            {name}
          </span>
        );
      })}
    </div>
  );
}
