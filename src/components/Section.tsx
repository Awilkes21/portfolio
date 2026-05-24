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
          <p className="accent-text mb-3 text-sm font-semibold uppercase tracking-[0.22em]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="heading-text text-3xl font-semibold sm:text-4xl">{title}</h2>
        {description ? <p className="body-text mt-4 text-base leading-7">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
