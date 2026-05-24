export type Project = {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Leftovers",
    description:
      "A capstone team project for recipe recommendation, built as a full-stack app for searching recipes and saving user preferences.",
    techStack: ["Python", "Flask", "JavaScript", "HTML/CSS", "Elasticsearch", "SQLite", "Docker"],
    highlights: [
      "Built with a team as a senior capstone project",
      "Combined recipe search, authentication, saved preferences, and personalized recommendations"
    ]
  },
  {
    title: "Relay",
    description:
      "A baseball analytics workspace for comparing pitcher and team behavior across time, built around fast local data exploration.",
    techStack: ["TypeScript", "React", "Vite", "Python", "FastAPI", "DuckDB"],
    highlights: [
      "Pairs a React and TypeScript interface with a FastAPI data service",
      "Uses local baseball data ingestion to support repeatable analysis and visual comparison"
    ],
    githubUrl: "https://github.com/Awilkes21/Relay"
  },
  {
    title: "Axiom",
    description:
      "A full-stack esports operations platform for coordinating scrims, schedules, team discovery, and player profiles.",
    techStack: ["JavaScript", "TypeScript", "Docker", "PostgreSQL", "WebSockets"],
    highlights: [
      "Implements real-time scrim invites, notifications, shared calendars, and profile workflows",
      "Runs as a multi-service Docker Compose app with frontend, backend, websocket, and database services"
    ],
    githubUrl: "https://github.com/Awilkes21/axiom"
  },
  {
    title: "CSE3902 Zelda Game",
    description:
      "A C# game project recreating a level from The Legend of Zelda (1987) as part of a five-person team.",
    techStack: ["C#"],
    highlights: [
      "Contributed gameplay systems including HUD behavior and save/load support",
      "Shows collaborative game development, input handling, and state management"
    ],
    githubUrl: "https://github.com/Awilkes21/CSE3902-Zelda-Game"
  },
  {
    title: "Global Natural Stones",
    description:
      "An Electron desktop application built with a small team for a local business partnership.",
    techStack: ["Electron", "JavaScript", "HTML/CSS"],
    highlights: [
      "Focused on packaging business workflows into a local desktop experience",
      "Developed collaboratively and later archived to GitHub as a public source snapshot"
    ],
    githubUrl: "https://github.com/Awilkes21/GlobalNaturalStones"
  }
];
