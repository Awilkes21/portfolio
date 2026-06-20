import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-16 sm:px-8">
      <p className="accent-text mb-4 text-sm font-semibold uppercase tracking-[0.24em]">
        404
      </p>
      <h1 className="heading-text text-4xl font-semibold leading-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="body-text mt-5 max-w-2xl text-base leading-7 sm:text-lg">
        This portfolio is mostly a single-page site, so the page you are looking
        for may have moved or never existed.
      </p>
      <div className="mt-8">
        <Link className="button-primary focus-ring px-5 py-3 text-sm" href="/">
          Back to home
        </Link>
      </div>
    </main>
  );
}
