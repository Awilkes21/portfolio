import type { SkillGroup as SkillGroupType } from "@/data/skills";

type SkillGroupProps = {
  group: SkillGroupType;
  onSkillSelect?: (skill: string) => void;
  selectedSkill?: string | null;
};

export function SkillGroup({ group, onSkillSelect, selectedSkill }: SkillGroupProps) {
  return (
    <article className="surface rounded-lg border p-5">
      <h3 className="heading-text text-base font-semibold">{group.title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <button
            aria-pressed={selectedSkill === skill}
            className={`rounded-md border px-3 py-1.5 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950 ${
              selectedSkill === skill
                ? "border-teal-300 bg-teal-300 text-ink-950"
                : "border-white/10 bg-ink-900/90 text-slate-200 hover:-translate-y-0.5 hover:border-teal-300/70 hover:text-teal-100"
            }`}
            key={skill}
            onClick={() => onSkillSelect?.(skill)}
            type="button"
          >
            {skill}
          </button>
        ))}
      </div>
    </article>
  );
}
