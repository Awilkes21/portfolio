"use client";

import { useEffect, useState } from "react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SkillGroup } from "@/components/SkillGroup";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const contactLinks = [
  { label: "Email", href: "mailto:awilkes.dev@gmail.com", value: "awilkes.dev@gmail.com" },
  { label: "GitHub", href: "https://github.com/Awilkes21", value: "github.com/Awilkes21" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andrewdwilkes/",
    value: "linkedin.com/in/andrewdwilkes"
  }
];

const focusItems = [
  "Web apps for engineering teams",
  "Dashboards for comparing complex data",
  "Automation around repetitive engineering processes"
];

const profileDetails = [
  { label: "Education", value: "B.S. Computer Science, The Ohio State University" },
  { label: "Current", value: "Modeling & Simulation Engineer at Radiance Technologies" }
];

const projectCount = projects.length;

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    return savedTheme === "light" || (!savedTheme && prefersLight) ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill((currentSkill) => (currentSkill === skill ? null : skill));
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Header
        onThemeToggle={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
        theme={theme}
      />
      <main>
        <section
          id="home"
          className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-8 sm:py-20 lg:px-10"
        >
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="accent-text mb-4 text-sm font-semibold uppercase tracking-[0.24em]">
                Software Engineer
              </p>
              <h1 className="heading-text max-w-3xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
                Andrew Wilkes
              </h1>
              <p className="body-text mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
                Full-stack software engineer building reliable web applications,
                data-rich interfaces, and practical tools for technical teams.
              </p>
              <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
                <a className="button-primary focus-ring px-5 py-3 text-center text-sm" href="#projects">
                  Projects
                </a>
                <a className="button-muted focus-ring px-5 py-3 text-center text-sm" href="/resume.pdf" rel="noreferrer" target="_blank">
                  Resume
                </a>
                <a className="button-muted focus-ring px-5 py-3 text-center text-sm" href="https://github.com/Awilkes21" rel="noreferrer" target="_blank">
                  GitHub
                </a>
                <a className="button-muted focus-ring px-5 py-3 text-center text-sm" href="https://www.linkedin.com/in/andrewdwilkes/" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </div>
            </div>

            <aside className="surface-strong relative overflow-hidden rounded-lg border p-6 shadow-soft backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-300 via-sky-300 to-amber-200" />
              <div className="grid gap-6">
                <div className="border-b border-white/10 pb-5">
                  <p className="accent-text text-sm font-medium uppercase tracking-[0.18em]">
                    Current Focus
                  </p>
                  <p className="heading-text mt-3 text-2xl font-semibold leading-snug">
                    Building practical software for complex, data-rich workflows.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="surface rounded-md border p-4">
                    <p className="heading-text text-3xl font-semibold">{projectCount}</p>
                    <p className="muted-text mt-1 text-xs font-medium uppercase tracking-[0.14em]">
                      Selected projects
                    </p>
                  </div>
                  <div className="surface rounded-md border p-4">
                    <p className="heading-text text-3xl font-semibold">3</p>
                    <p className="muted-text mt-1 text-xs font-medium uppercase tracking-[0.14em]">
                      Roles
                    </p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {focusItems.map((item) => (
                    <div
                      className="surface body-text rounded-md border px-4 py-3 text-sm leading-6"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <dl className="grid gap-3 border-t border-white/10 pt-5">
                  {profileDetails.map((item) => (
                    <div className="grid gap-1 sm:grid-cols-[6.5rem_1fr]" key={item.label}>
                      <dt className="muted-text text-xs font-semibold uppercase tracking-[0.16em]">
                        {item.label}
                      </dt>
                      <dd className="body-text text-sm font-medium">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <Section
          eyebrow="Selected Work"
          id="projects"
          title="Projects"
          description="A focused set of public projects that show full-stack product thinking, automation, data workflows, and team development."
        >
          {selectedSkill ? (
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-teal-300/30 bg-teal-300/10 px-4 py-3 text-sm text-teal-50">
              <span>
                Highlighting projects and experience that use <strong>{selectedSkill}</strong>.
              </span>
              <button
                className="button-secondary focus-ring px-3 py-1.5 text-sm"
                onClick={() => setSelectedSkill(null)}
                type="button"
              >
                Clear filter
              </button>
            </div>
          ) : null}
          <div className="grid gap-5">
            {projects[0] ? (
              <ProjectCard
                index={0}
                key={projects[0].title}
                project={projects[0]}
                selectedSkill={selectedSkill}
                variant="featured"
              />
            ) : null}
            <div className="grid gap-5 md:grid-cols-2">
              {projects.slice(1).map((project, index) => (
                <ProjectCard
                  index={index + 1}
                  key={project.title}
                  project={project}
                  selectedSkill={selectedSkill}
                />
              ))}
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Background"
          id="experience"
          title="Experience"
          description="Professional work across simulation tooling, frontend systems, backend services, CI/CD, and developer-facing workflows."
        >
          <div className="grid gap-5">
            {experiences.map((experience) => (
              <ExperienceCard
                experience={experience}
                key={`${experience.company}-${experience.role}-${experience.period}`}
                selectedSkill={selectedSkill}
              />
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Toolkit"
          id="skills"
          title="Skills"
          description="Tools I use to build web applications, automation workflows, data utilities, and software for technical teams."
        >
          {selectedSkill ? (
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="muted-text">Selected skill:</span>
              <button
                className="button-secondary focus-ring px-3 py-1.5 text-sm"
                onClick={() => setSelectedSkill(null)}
                type="button"
              >
                {selectedSkill} x
              </button>
            </div>
          ) : null}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <SkillGroup
                group={group}
                key={group.title}
                onSkillSelect={handleSkillSelect}
                selectedSkill={selectedSkill}
              />
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Contact"
          id="contact"
          title="Get in touch"
          description="Reach out by email, or find more of my work and background through GitHub and LinkedIn."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {contactLinks.map((link) => (
              <a
                className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:border-teal-300/70 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950"
                href={link.href}
                key={link.label}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                <span className="text-sm font-medium text-slate-400">{link.label}</span>
                <span className="mt-2 block break-words text-base font-semibold text-white transition group-hover:text-teal-100">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
