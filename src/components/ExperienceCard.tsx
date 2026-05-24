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
      className={`rounded-lg border p-6 transition ${
        matchesSelectedSkill
          ? "border-teal-300/80 bg-teal-300/10 shadow-soft"
          : "border-white/10 bg-white/[0.04]"
      } ${selectedSkill && !matchesSelectedSkill ? "opacity-55" : ""}`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
          <p className="mt-1 text-sm font-medium text-teal-200">{experience.role}</p>
        </div>
        <p className="text-sm text-slate-400">{experience.period}</p>
      </div>
      <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
        {experience.details.map((detail) => (
          <li className="flex gap-3" key={detail}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {experience.techStack.map((tech) => (
          <span
            className={`rounded-md px-2.5 py-1 text-xs font-medium ${
              selectedSkill === tech
                ? "bg-teal-300 text-ink-950"
                : "bg-teal-300/10 text-teal-100"
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
