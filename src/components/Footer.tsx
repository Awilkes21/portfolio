export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
      <p className="body-text">
        {"\u00A9"} {new Date().getFullYear()} Andrew Wilkes. Built with Next.js and
        Tailwind CSS.{" "}
        <a
          className="accent-text font-semibold hover:underline"
          href="https://github.com/Awilkes21/portfolio"
          rel="noreferrer"
          target="_blank"
        >
          Source
        </a>
      </p>
    </footer>
  );
}
