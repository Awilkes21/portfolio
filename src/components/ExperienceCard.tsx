import type { Experience } from "@/data/experience";

type ExperienceCardProps = {
  experience: Experience;
  selectedSkill?: string | null;
};

export function ExperienceCard({ experience, selectedSkill }: ExperienceCardProps) {
  const matchesSelectedSkill = selectedSkill
    ? experience.techStack.includes(selectedSkill)
    : false;

  return (
    <article
      className={`relative overflow-hidden rounded-lg border p-5 transition duration-200 sm:p-6 ${
        matchesSelectedSkill
          ? "accent-border accent-bg-soft shadow-soft"
          : "surface"
      } ${selectedSkill && !matchesSelectedSkill ? "opacity-45" : ""}`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-1 ${
          matchesSelectedSkill ? "accent-bg" : "bg-white/10"
        }`}
      />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="heading-text text-xl font-semibold leading-7">{experience.company}</h3>
          <p className="accent-text mt-1 text-sm font-medium">{experience.role}</p>
        </div>
        <p className="surface-strong body-text w-fit rounded-md border px-3 py-1.5 text-sm">
          {experience.period}
        </p>
      </div>
      <ul className="body-text mt-5 space-y-2 text-sm leading-6">
        {experience.details.map((detail) => (
          <li className="flex gap-3" key={detail}>
            <span className="accent-bg mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {experience.techStack.map((tech) => (
          <span
            className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
              selectedSkill === tech
                ? "accent-chip-selected"
                : "accent-chip"
            }`}
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
