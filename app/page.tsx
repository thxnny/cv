import Header from "@/components/Header";
import Cover from "@/components/Cover";
import Section from "@/components/Section";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import { profile } from "@/data/cv";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden />
      <span className="spine hidden font-mono text-[10px] uppercase text-muted/60 lg:block" aria-hidden>
        {profile.name} — selected work
      </span>
      <Header />
      <main>
        <Cover />

        <Section id="about" index="01" title="Profile">
          <p className="max-w-2xl text-xl leading-relaxed text-fg/90 sm:text-2xl sm:leading-relaxed">
            {profile.summary}
          </p>
        </Section>

        <Section id="work" index="02" title="Experience">
          <Experience />
        </Section>

        <Section id="stack" index="03" title="Skill">
          <Skills />
        </Section>

        <Section id="education" index="04" title="Education">
          <Education />
        </Section>

        <Section id="contact" index="05" title="Contact">
          <Contact />
        </Section>
      </main>
      <BackToTop />
    </>
  );
}
