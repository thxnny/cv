import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { profile } from "@/data/cv";

export default function Home() {
  return (
    <main>
      <Nav name={profile.name} />
      <Hero />

      <Section id="about" title="About">
        <p className="max-w-2xl text-base leading-relaxed text-muted">{profile.summary}</p>
      </Section>

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="skills" title="Skills">
        <Skills />
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>

      <Section id="contact" title="Contact">
        <Contact />
      </Section>

      <footer className="border-t border-border/60 py-8 text-center font-mono text-xs text-muted">
        © {profile.name} · Built with Next.js & Tailwind
      </footer>
    </main>
  );
}
