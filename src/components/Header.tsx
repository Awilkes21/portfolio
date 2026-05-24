const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/85 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10"
      >
        <a className="text-sm font-semibold uppercase tracking-[0.2em] text-white" href="#home">
          AW
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-medium text-slate-300 transition hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          className="rounded-md border border-teal-300/60 px-4 py-2 text-sm font-semibold text-teal-200 transition hover:bg-teal-300 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950"
          href="mailto:awilkes.dev@gmail.com"
        >
          Email
        </a>
      </nav>
    </header>
  );
}
