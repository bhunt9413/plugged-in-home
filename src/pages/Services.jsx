import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Home Wi-Fi & Networking",
    desc: "Fix dead zones, slow speeds, and unreliable connections. Mesh setup, router tuning, and secure guest networks.",
    items: [
      "Mesh / router setup",
      "Speed & coverage optimization",
      "Network security basics",
      "Device connectivity issues",
    ],
  },
  {
    title: "Computer Tune-Up (PC/Mac)",
    desc: "Speed up your computer, reduce crashes, and clean up startup bloat—without losing your data.",
    items: [
      "Performance cleanup",
      "Startup optimization",
      "Storage cleanup",
      "OS updates + health check",
    ],
  },
  {
    title: "Virus & Malware Removal",
    desc: "Remove malware, lock down accounts, and reduce the chance it happens again.",
    items: [
      "Malware cleanup",
      "Browser hijack removal",
      "Account security checklist",
      "Backup + recovery guidance",
    ],
  },
  {
    title: "Printer & Device Setup",
    desc: "Printers, scanners, webcams, smart TVs—set up the right way, on all your devices.",
    items: [
      "Printer install + troubleshooting",
      "Driver/setup issues",
      "Multi-device configuration",
      "Wireless printing fixes",
    ],
  },
  {
    title: "Smart Home Support",
    desc: "Get cameras, doorbells, speakers, and hubs working reliably—and safely.",
    items: [
      "Device setup",
      "Automation basics",
      "Wi-Fi reliability tuning",
      "Security hardening tips",
    ],
  },
];

const PLANS = [
  {
    title: "Remote Support",
    price: "Starting at $115",
    badge: "Fast",
    bullets: [
      "Direct session with an experienced IT professional (not outsourced support)",
      "Structured remote diagnostics and guided resolution",
      "Microsoft 365, email, account, and software troubleshooting",
      "Security-focused fixes with prevention recommendations",
      "Most issues resolved within 60–90 minutes",
    ],
    cta: "Request Remote Support",
  },
  {
    title: "On-Site Visit",
    price: "Starting at $145",
    badge: "Local",
    bullets: [
      "In-person diagnostics and hands-on troubleshooting",
      "Network, Wi-Fi, workstation, and printer resolution",
      "Root cause analysis — not just quick fixes",
      "Clear explanation of what happened and how to prevent repeats",
      "Travel included within the Elkhart area",
    ],
    cta: "Request On-Site Visit",
  },
  {
    title: "Small Business Priority Support",
    price: "$649 / month (up to 5 users)",
    badge: "Business",
    bullets: [
      "Priority scheduling + faster response",
      "Remote support included (common issues handled same day when possible)",
      "Includes up to 4 hours on-site per month (Elkhart area)",
      "Workstations, Wi-Fi, printers, and Microsoft 365 basics",
      "Vendor coordination (ISP, printer support, software support)",
      "Quarterly tech check-in to prevent repeat issues",
    ],
    perCall: [
      "You submit the issue (call, text, or email) with a quick description",
      "I confirm scope + next steps, then start remote triage first",
      "If it can’t be solved remotely, we schedule on-site within your included hours",
      "After resolution, you get a short summary + recommendations to avoid repeats",
    ],
    finePrint: [
      "Does not include 24/7 monitoring, backup management, or security tooling (available in future managed plans).",
      "Work outside included hours is billed at a discounted business rate.",
    ],
    cta: "Request Business Support",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="border-b border-slate-200/70 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-700 ring-1 ring-blue-500/20 dark:text-blue-200">
            Services & Pricing
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent IT support
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            Serving homes and small businesses in Elkhart, Indiana and the
            surrounding area. Clear pricing. No hidden fees. No surprises.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Request Support
            </Link>
            <a
              href="tel:+1-574-226-9413"
              className="inline-flex justify-center rounded-xl bg-slate-900/5 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-900/10 ring-1 ring-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:ring-white/15"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">What I can help with</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-slate-900/5 p-6 ring-1 ring-slate-900/10 transition hover:ring-slate-900/20 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-white/20"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {s.desc}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/70 shrink-0 dark:bg-blue-400/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-500/20 hover:bg-blue-500/15 transition dark:bg-blue-500/15 dark:text-blue-100 dark:ring-blue-500/25 dark:hover:bg-blue-500/25"
              >
                Get help with this
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Plans (Updated) */}
      <section className="border-t border-slate-200/70 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">Support Options</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-slate-900/5 p-6 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-700 ring-1 ring-blue-500/20 dark:text-blue-200">
                    {p.badge}
                  </span>
                </div>

                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {p.price}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/70 shrink-0 dark:bg-blue-400/80" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Policies Link (Remote Support Only) */}
                {p.title === "Remote Support" && (
                  <Link
                    to="/policies"
                    className="mt-4 block text-sm text-blue-600 hover:underline dark:text-blue-400"
                  >
                    View payment & service policies
                  </Link>
                )}

                {/* Small Business: What to expect per request */}
                {p.perCall && (
                  <div className="mt-5 rounded-xl bg-slate-900/5 p-4 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      What to expect per request
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      {p.perCall.map((step) => (
                        <li key={step} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/70 shrink-0 dark:bg-blue-400/80" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Small Business: Fine print */}
                {p.finePrint && (
                  <div className="mt-4 text-xs leading-5 text-slate-600 dark:text-slate-400">
                    {p.finePrint.map((line) => (
                      <p key={line} className="mt-2">
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-full justify-center rounded-xl bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-400"
                >
                  {p.cta ? p.cta : `Request ${p.title}`}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
