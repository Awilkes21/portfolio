import type { SkillGroup as SkillGroupType } from "@/data/skills";

type SkillGroupProps = {
  group: SkillGroupType;
  onSkillSelect?: (skill: string) => void;
  selectedSkill?: string | null;
};

export function SkillGroup({ group, onSkillSelect, selectedSkill }: SkillGroupProps) {
  return (
    <article className="surface rounded-lg border p-4 sm:p-5">
      <h3 className="heading-text text-base font-semibold">{group.title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <button
            aria-pressed={selectedSkill === skill}
            className={`focus-ring cursor-pointer rounded-md border px-3 py-1.5 text-left text-sm transition ${
              selectedSkill === skill
                ? "accent-border accent-chip-selected"
                : "border-white/10 bg-ink-900/90 text-slate-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
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
