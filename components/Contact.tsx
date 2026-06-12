import { profile } from "@/data/cv";

export default function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "GitHub", value: profile.githubHandle, href: profile.github },
    { label: "LinkedIn", value: "in/than-chayawik", href: profile.linkedin },
  ];

  return (
    <div className="rounded-lg border border-border bg-surface p-8 text-center">
      <h3 className="text-2xl font-bold text-fg">Let&apos;s build something.</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">
        Open to full-stack and DevOps roles. The fastest way to reach me is email.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center justify-between rounded-md border border-border bg-bg px-4 py-3 text-left transition-colors hover:border-accent"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              {it.label}
            </span>
            <span className="text-sm text-fg transition-colors group-hover:text-accent">
              {it.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
