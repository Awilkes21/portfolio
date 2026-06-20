import type { Project } from "@/data/projects";
import { trackOutboundClick } from "@/lib/analytics";

type ProjectCardProps = {
  index: number;
  project: Project;
  selectedSkill?: string | null;
  variant?: "featured" | "standard";
};

export function ProjectCard({
  index,
  project,
  selectedSkill,
  variant = "standard"
}: ProjectCardProps) {
  const matchesSelectedSkill = selectedSkill
    ? project.techStack.includes(selectedSkill)
    : false;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border p-5 transition duration-200 sm:p-6 ${
        matchesSelectedSkill
          ? "accent-border accent-bg-soft shadow-soft"
          : "surface hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-white/[0.07]"
      } ${selectedSkill && !matchesSelectedSkill ? "opacity-45" : ""} ${
        variant === "featured" ? "md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-8" : ""
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 ${
          matchesSelectedSkill ? "accent-bg" : "bg-white/10 group-hover:bg-[color:var(--accent)]"
        }`}
      />
      <div>
        <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
          <span className="accent-text text-xs font-semibold uppercase tracking-[0.18em]">
            {project.category}
          </span>
          <span className="muted-text font-mono text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3
          className={`heading-text font-semibold leading-tight ${
            variant === "featured" ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="body-text mt-3 text-sm leading-6">{project.description}</p>
      </div>

      <div className={variant === "featured" ? "mt-6 md:mt-0" : ""}>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
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

        <ul className="body-text mt-4 space-y-2 text-sm leading-6 sm:mt-5">
          {project.highlights.map((highlight) => (
            <li className="flex gap-3" key={highlight}>
              <span className="accent-bg mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-5 sm:pt-6">
            {project.githubUrl ? (
              <a
                aria-label={`View ${project.title} source code`}
                className="button-secondary focus-ring px-3 py-2 text-sm"
                href={project.githubUrl}
                onClick={() =>
                  trackOutboundClick("project_source", {
                    project: project.title,
                    url: project.githubUrl || ""
                  })
                }
                rel="noreferrer"
                target="_blank"
              >
                Source
              </a>
            ) : null}
            {project.demoUrl ? (
              <a
                aria-label={`View ${project.title} demo`}
                className="button-primary focus-ring px-3 py-2 text-sm"
                href={project.demoUrl}
                onClick={() =>
                  trackOutboundClick("project_demo", {
                    project: project.title,
                    url: project.demoUrl || ""
                  })
                }
                rel="noreferrer"
                target="_blank"
              >
                Demo
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
