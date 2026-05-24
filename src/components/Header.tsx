import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

type HeaderProps = {
  onThemeToggle: () => void;
  theme: "dark" | "light";
};

export function Header({ onThemeToggle, theme }: HeaderProps) {
  return (
    <header className="site-header sticky top-0 z-50 border-b backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-20 max-w-6xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-6 py-4 sm:px-8 lg:px-10"
      >
        <a className="group flex items-center gap-3" href="#home" aria-label="Andrew Wilkes home">
          <span className="brand-mark">
            AW
          </span>
          <span className="text-secondary hidden text-sm font-medium sm:inline">
            Andrew Wilkes
          </span>
        </a>
        <div className="no-scrollbar order-3 flex w-full items-center gap-1 overflow-x-auto sm:order-none sm:w-auto sm:gap-2">
          {navItems.map((item) => (
            <a
              className="nav-link focus-ring shrink-0 rounded-md border border-transparent px-3 py-2 text-sm font-medium transition"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle onToggle={onThemeToggle} theme={theme} />
          <a className="button-secondary focus-ring px-4 py-2 text-sm" href="mailto:awilkes.dev@gmail.com">
            Email
          </a>
        </div>
      </nav>
    </header>
  );
}
