import { profile } from "@/data/cv";

export default function Hero() {
  return (
    <section className="glow relative">
      <div className="mx-auto flex max-w-4xl flex-col justify-center px-6 pb-20 pt-24 sm:pt-32">
        <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
        <h2 className="mt-2 text-2xl font-semibold text-muted sm:text-4xl">{profile.role}</h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
          >
            View work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
