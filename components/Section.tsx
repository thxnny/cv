import Reveal from "@/components/Reveal";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-b border-line">
      <div className="mx-auto grid max-w-[1080px] gap-y-6 px-6 py-16 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-x-12 lg:px-10 lg:py-24">
        {/* marginalia rail */}
        <div className="flex items-baseline gap-3 lg:sticky lg:top-20 lg:block lg:self-start">
          <div className="font-mono text-3xl font-bold leading-none text-copper lg:text-4xl">
            {index}
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted lg:mt-3 lg:border-t lg:border-line lg:pt-3">
            {title}
          </div>
        </div>

        <Reveal className="min-w-0">{children}</Reveal>
      </div>
    </section>
  );
}
