import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  description?: string;
  eyebrow?: string;
  id: string;
  title: string;
};

export function Section({ children, description, eyebrow, id, title }: SectionProps) {
  return (
    <section
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-16 sm:px-8 sm:py-20 lg:px-10"
      id={id}
    >
      <div className="mb-10 max-w-3xl border-t border-white/10 pt-8">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-7 text-slate-300">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
