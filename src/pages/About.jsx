import headshot from "../assets/brandon-hunt-headshot.jpg";

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

        {/* Headshot + Intro */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={headshot}
              alt="Brandon Hunt - Local IT Support Specialist"
              className="w-72 h-72 rounded-2xl object-cover shadow-lg ring-1 ring-slate-900/10 dark:ring-white/10"
            />
          </div>

          <div className="space-y-5 text-slate-700 dark:text-slate-300">
            <h2 className="text-2xl font-semibold">Hi, I’m Brandon</h2>

            <p>
              I’m an IT Support professional with over 8 years of experience
              supporting users in fast-paced office and production environments.
              Most recently, I served as a Senior IT Support Specialist supporting
              12 locations and over 500 users, resolving complex hardware,
              software, networking, and access-related issues.
            </p>

            <p>
              I built Plugged In Home to bring that same level of structured,
              reliable IT support to local families and small businesses —
              without the corporate complexity or call center experience.
            </p>

            <p>
              When you contact me, you’re working directly with the person who
              will diagnose the issue, explain what’s happening clearly, and fix
              it the right way.
            </p>
          </div>
        </div>

        {/* Professional Background */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-slate-700 dark:text-slate-300">
            <h2 className="text-xl font-semibold">Professional Background</h2>
            <p>
              My experience includes Windows desktop support, Microsoft 365,
              endpoint deployment, printer management, VPN connectivity, and
              secure access administration. I’ve led hardware refresh cycles,
              supported company-wide Windows migrations, and managed user
              onboarding and access control at scale.
            </p>
            <p>
              I approach every problem with structured diagnostics and root
              cause analysis — focusing on long-term reliability rather than
              temporary fixes.
            </p>
          </div>

          <div className="space-y-5 text-slate-700 dark:text-slate-300">
            <h2 className="text-xl font-semibold">Who I Work With</h2>
            <p>
              I help homeowners who are tired of Wi-Fi issues, slow computers,
              and printer headaches — and small business owners who need their
              technology working reliably every day.
            </p>
            <p>
              Families want technology that simply works. Small businesses need
              uptime, stability, and security. My goal is to provide calm,
              dependable support that removes stress from your technology.
            </p>
          </div>
        </div>

        {/* Local Trust Section */}
        <div className="mt-14 rounded-3xl bg-slate-900/5 p-8 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
          <h3 className="text-xl font-semibold">
            Serving Local Homes & Small Businesses
          </h3>
          <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
            Based in Elkhart, Indiana, I provide responsive IT support to local
            homes and small offices in the surrounding area. When you call,
            you’re speaking directly with the technician who will solve the
            problem — not outsourced support.
          </p>
        </div>
      </section>
    </main>
  );
}