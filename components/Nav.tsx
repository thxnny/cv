const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-sm font-semibold tracking-tight text-accent">
          {initials}<span className="text-muted">.dev</span>
        </a>
        <ul className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
