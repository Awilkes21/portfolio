"use client";

import { useState } from "react";
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
  "Full-stack application development",
  "Simulation workflow automation",
  "Data visualization for engineering analysis",
  "Developer tools that reduce repetitive process"
];

const profileDetails = [
  { label: "Location", value: "Dayton, OH" },
  { label: "Education", value: "B.S. Computer Science, Ohio State" },
  { label: "Current", value: "Junior Software Engineer at Radiance" }
];

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill((currentSkill) => (currentSkill === skill ? null : skill));
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <section
          id="home"
          className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-8 sm:py-20 lg:px-10"
        >
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">
                Software Engineer
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
                Andrew Wilkes
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Full-stack software engineer focused on analysis tools, data-rich
                interfaces, and practical systems that make technical workflows easier
                to understand and operate.
              </p>
              <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
                <a className="rounded-md bg-teal-300 px-5 py-3 text-center text-sm font-semibold text-ink-950 transition hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950" href="#projects">
                  Projects
                </a>
                <a className="rounded-md border border-slate-600 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-teal-300 hover:bg-white/[0.04] hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950" href="/resume.pdf">
                  Resume
                </a>
                <a className="rounded-md border border-slate-600 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-teal-300 hover:bg-white/[0.04] hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950" href="https://github.com/Awilkes21" rel="noreferrer" target="_blank">
                  GitHub
                </a>
                <a className="rounded-md border border-slate-600 px-5 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-teal-300 hover:bg-white/[0.04] hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950" href="https://www.linkedin.com/in/andrewdwilkes/" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-lg border border-white/10 bg-ink-900/75 p-6 shadow-soft backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-300 via-sky-300 to-amber-200" />
              <div className="grid gap-6">
                <div className="border-b border-white/10 pb-5">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-300">
                    Current Focus
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-snug text-white">
                    Building practical tools for analysis-heavy engineering work.
                  </p>
                </div>

                <div className="grid gap-3">
                  {focusItems.map((item) => (
                    <div
                      className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-slate-200"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <dl className="grid gap-3 border-t border-white/10 pt-5">
                  {profileDetails.map((item) => (
                    <div className="grid gap-1 sm:grid-cols-[6.5rem_1fr]" key={item.label}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-medium text-slate-200">{item.value}</dd>
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
                className="rounded-md border border-teal-200/40 px-3 py-1.5 font-semibold text-teal-100 transition hover:bg-teal-200 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950"
                onClick={() => setSelectedSkill(null)}
                type="button"
              >
                Clear filter
              </button>
            </div>
          ) : null}
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                selectedSkill={selectedSkill}
              />
            ))}
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
