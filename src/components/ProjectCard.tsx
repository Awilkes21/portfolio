import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  selectedSkill?: string | null;
};

export function ProjectCard({ project, selectedSkill }: ProjectCardProps) {
  const matchesSelectedSkill = selectedSkill
    ? project.techStack.includes(selectedSkill)
    : false;

  return (
    <article
      className={`flex h-full flex-col rounded-lg border p-6 transition ${
        matchesSelectedSkill
          ? "border-teal-300/80 bg-teal-300/10 shadow-soft"
          : "border-white/10 bg-white/[0.04] hover:border-teal-300/60 hover:bg-white/[0.07]"
      } ${selectedSkill && !matchesSelectedSkill ? "opacity-55" : ""}`}
    >
      <div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
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

      <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
        {project.highlights.map((highlight) => (
          <li className="flex gap-3" key={highlight}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {(project.githubUrl || project.demoUrl) && (
        <div className="mt-auto flex gap-4 pt-6">
          {project.githubUrl ? (
            <a className="text-sm font-semibold text-teal-200 hover:text-teal-100" href={project.githubUrl} rel="noreferrer" target="_blank">
              Source
            </a>
          ) : null}
          {project.demoUrl ? (
            <a className="text-sm font-semibold text-teal-200 hover:text-teal-100" href={project.demoUrl} rel="noreferrer" target="_blank">
              Demo
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}
