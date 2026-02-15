import { Link } from "react-router-dom";

export default function Success() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-2xl px-4 py-16">
        <div className="rounded-3xl bg-slate-900/5 p-8 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
          <p className="inline-flex items-center rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-700 ring-1 ring-green-500/20 dark:text-green-200">
            Message sent
          </p>
          <h1 className="mt-5 text-3xl font-bold">Thanks — I got it.</h1>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            I’ll respond as soon as possible. If it’s urgent, call and I’ll do my best
            to help quickly.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex justify-center rounded-xl bg-slate-900/5 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-900/10 ring-1 ring-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:ring-white/15"
            >
              Back to Home
            </Link>

            <a
              href="tel:+1-574-226-9413"
              className="inline-flex justify-center rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
