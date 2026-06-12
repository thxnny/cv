export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted">
        <span className="text-accent">{"//"}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
