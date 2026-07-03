import { LuMail, LuPhone, LuGithub, LuLinkedin, LuArrowUpRight } from "react-icons/lu";
import { profile } from "@/data/cv";

export default function Contact() {
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: LuMail },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: LuPhone },
    { label: "GitHub", value: profile.githubHandle, href: profile.github, Icon: LuGithub },
    { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, Icon: LuLinkedin },
  ];

  return (
    <div>
      <h3 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
        Let&apos;s build something.
      </h3>
      <p className="mt-3 max-w-md text-muted">
        Open to full-stack and DevOps roles. Fastest way to reach me is email.
      </p>

      <ul className="mt-9 flex flex-col border-t border-line">
        {channels.map(({ label, value, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 border-b border-line py-4 transition-colors hover:text-copper"
            >
              <Icon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-copper" />
              <span className="w-20 shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {label}
              </span>
              <span className="min-w-0 flex-1 truncate">{value}</span>
              <LuArrowUpRight className="h-4 w-4 shrink-0 text-line transition-colors group-hover:text-copper" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
