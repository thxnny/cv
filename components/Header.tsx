import { profile } from "@/data/cv";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Skill" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-6 font-mono text-xs lg:px-10">
        <a href="#top" className="flex items-center gap-2 tracking-tight text-fg">
          {profile.available && <span className="h-1.5 w-1.5 rounded-full bg-copper" />}
          <span className="uppercase tracking-[0.1em]">{profile.name}</span>
        </a>
        <nav className="flex gap-6 text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-copper">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
