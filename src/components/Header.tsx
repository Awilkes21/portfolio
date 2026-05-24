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
        className="mx-auto flex min-h-20 max-w-6xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-6 py-4 sm:px-8 lg:px-10"
      >
        <a className="group flex items-center gap-3" href="#home" aria-label="Andrew Wilkes home">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-teal-300/40 bg-teal-300/10 text-sm font-semibold uppercase tracking-[0.12em] text-teal-100 transition group-hover:border-teal-200 group-hover:bg-teal-300 group-hover:text-ink-950">
            AW
          </span>
          <span className="hidden text-sm font-medium text-slate-300 sm:inline">
            Andrew Wilkes
          </span>
        </a>
        <div className="order-3 flex w-full items-center gap-1 overflow-x-auto sm:order-none sm:w-auto sm:gap-2">
          {navItems.map((item) => (
            <a
              className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-ink-950"
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
