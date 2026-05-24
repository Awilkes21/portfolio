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
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border p-6 transition duration-200 ${
        matchesSelectedSkill
          ? "border-teal-300/80 bg-teal-300/10 shadow-soft"
          : "border-white/10 bg-white/[0.04] hover:-translate-y-0.5 hover:border-teal-300/60 hover:bg-white/[0.07]"
      } ${selectedSkill && !matchesSelectedSkill ? "opacity-45" : ""}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 ${
          matchesSelectedSkill ? "bg-teal-300" : "bg-white/10 group-hover:bg-teal-300/70"
        }`}
      />
      <div>
        <h3 className="text-xl font-semibold leading-7 text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
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
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.githubUrl ? (
            <a className="rounded-md border border-teal-300/30 px-3 py-2 text-sm font-semibold text-teal-200 transition hover:border-teal-200 hover:bg-teal-300 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950" href={project.githubUrl} rel="noreferrer" target="_blank">
              Source
            </a>
          ) : null}
          {project.demoUrl ? (
            <a className="rounded-md border border-teal-300/30 px-3 py-2 text-sm font-semibold text-teal-200 transition hover:border-teal-200 hover:bg-teal-300 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950" href={project.demoUrl} rel="noreferrer" target="_blank">
              Demo
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}
