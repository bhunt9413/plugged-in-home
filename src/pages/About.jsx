export default function About() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-700 ring-1 ring-blue-500/20 dark:text-blue-200">
          About
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          Local IT Support You Can Trust
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
          Plugged In Home was built to provide straightforward, reliable IT support
          for local families and small businesses. No confusing jargon. No hidden
          pricing. Just clear solutions that work.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-slate-700 dark:text-slate-300">
            <h2 className="text-xl font-semibold">Who I Work With</h2>
            <p>
              I help homeowners who are tired of Wi-Fi issues, slow computers,
              and printer headaches — and small business owners who need their
              technology working reliably every day.
            </p>
            <p>
              Whether it’s a smart home setup, malware cleanup, or keeping a
              small office running smoothly, I focus on practical solutions and
              long-term stability.
            </p>
          </div>

          <div className="space-y-5 text-slate-700 dark:text-slate-300">
            <h2 className="text-xl font-semibold">What You Can Expect</h2>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/70 dark:bg-blue-400/80 shrink-0" />
                Clear communication — no technical overwhelm
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/70 dark:bg-blue-400/80 shrink-0" />
                Honest pricing before work begins
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/70 dark:bg-blue-400/80 shrink-0" />
                Secure, privacy-focused best practices
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/70 dark:bg-blue-400/80 shrink-0" />
                Remote or on-site support options
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-slate-900/5 p-8 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
          <h3 className="text-xl font-semibold">
            Serving Local Homes & Small Businesses
          </h3>
          <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
            Based locally, Plugged In Home provides responsive IT support to
            families and small businesses in the surrounding area. When you call,
            you’re speaking directly with the person who will solve the problem —
            not a call center.
          </p>
        </div>
      </section>
    </main>
  );
}
