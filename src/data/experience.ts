export type Experience = {
  company: string;
  role: string;
  period: string;
  details: string[];
  techStack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Radiance Technologies",
    role: "Modeling & Simulation Engineer",
    period: "Jun 2024 - Present",
    details: [
      "Build full-stack tools for simulation analysis, data visualization, and cross-system workflow automation.",
      "Work across React, Node.js, Flask, C++, Docker, and GitLab CI to turn engineering workflows into reliable software.",
      "Focus on making complex system data easier to inspect, validate, and move between tools."
    ],
    techStack: ["React", "Node.js", "Flask", "C++", "Docker", "GitLab CI"]
  },
  {
    company: "Tangram Flex",
    role: "Software Engineer Intern",
    period: "May 2023 - Aug 2023",
    details: [
      "Improved reliability in a C/C++ code transformation tool used for automated dependency handling.",
      "Designed lightweight Bash and Makefile-based test workflows to strengthen coverage."
    ],
    techStack: ["C++", "Bash"]
  },
  {
    company: "Radiance Technologies",
    role: "Software Engineer Intern",
    period: "May - Aug 2021, May - Aug 2022",
    details: [
      "Built frontend features for a modeling and simulation web application focused on surfacing data and documentation.",
      "Created a documentation app for custom React components to improve usability and developer onboarding."
    ],
    techStack: ["React", "JavaScript", "HTML/CSS"]
  }
];
