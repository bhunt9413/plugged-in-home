import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* LEFT: HERO COPY */}
          <div className="text-center md:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-700 ring-1 ring-blue-500/20 dark:text-blue-200">
              Fast • Local • Professional
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight leading-tight sm:text-5xl">
              Reliable IT Support for{" "}
              <span className="text-blue-600 dark:text-blue-400">Homes</span> &{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Small Businesses
              </span>
            </h1>

            <p className="mt-5 text-lg text-slate-700 dark:text-slate-300">
              Wi-Fi issues, slow computers, printer chaos, malware, smart home
              setup — I’ll get you back up and running quickly with clear,
              honest pricing.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link
                to="/contact"
                className="inline-flex justify-center rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                Get Support
              </Link>

              <a
                href="tel:+1-574-226-9413"
                className="inline-flex justify-center rounded-xl bg-slate-900/5 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-900/10 ring-1 ring-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:ring-white/15"
              >
                Call Now
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { title: "Same-day help", desc: "When available" },
                { title: "Remote support", desc: "Quick fixes" },
                { title: "On-site visits", desc: "Local service" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-slate-900/5 p-4 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10"
                >
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SERVICES CARD */}
          <div className="rounded-3xl bg-gradient-to-b from-blue-500/10 to-transparent p-6 ring-1 ring-blue-500/20 dark:from-blue-500/15">
            <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-slate-900/10 dark:bg-slate-900/60 dark:ring-white/10">
              <h2 className="text-lg font-semibold">Popular Services</h2>

              <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex justify-between">
                  <span>Wi-Fi / Mesh setup</span>
                  <span className="text-slate-500 dark:text-slate-400">Home</span>
                </li>
                <li className="flex justify-between">
                  <span>Computer tune-up</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    PC/Mac
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Virus & malware cleanup</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Security
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Printer & device setup</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Setup
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Smart home help</span>
                  <span className="text-slate-500 dark:text-slate-400">IoT</span>
                </li>
              </ul>

              <div className="mt-6 rounded-xl bg-slate-900/5 p-4 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
                <div className="text-sm text-slate-700 dark:text-slate-300">
                  Want a quick estimate?
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Send a message with your issue and device type.
                </div>

                <Link
                  to="/contact"
                  className="mt-4 inline-flex w-full justify-center rounded-xl bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-400"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

