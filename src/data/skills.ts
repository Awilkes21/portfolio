export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["C++", "Python", "TypeScript", "JavaScript", "SQL", "Java", "C#", "HTML/CSS"]
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Flask", "FastAPI", "Electron", "Vite"]
  },
  {
    title: "Data & Platforms",
    skills: ["DuckDB", "PostgreSQL", "SQLite", "Elasticsearch", "WebSockets"]
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Docker",
      "Docker Compose",
      "GitLab CI",
      "Bash",
      "Makefile",
      "Testing",
      "Jira",
      "VS Code",
      "Visual Studio",
      "Unity"
    ]
  }
];
