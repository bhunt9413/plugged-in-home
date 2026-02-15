export default function Contact() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-slate-200/70 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-700 ring-1 ring-blue-500/20 dark:text-blue-200">
            Contact
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Tell me what’s going on
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            Share the issue and your device type. I’ll reply with next steps and the
            fastest support option (remote or on-site).
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl bg-slate-900/5 p-8 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
            <h2 className="text-xl font-semibold">Contact form</h2>


            <form
              name="support"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mt-6 space-y-5"
            >
              <input type="hidden" name="form-name" value="support" />

              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-slate-700 dark:text-slate-300" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 ring-slate-900/10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900/60 dark:text-white dark:ring-white/10"
                    placeholder="Joe Smith"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700 dark:text-slate-300" htmlFor="phone">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 ring-slate-900/10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900/60 dark:text-white dark:ring-white/10"
                    placeholder="(012) 345-6789"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-slate-700 dark:text-slate-300" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 ring-slate-900/10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900/60 dark:text-white dark:ring-white/10"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700 dark:text-slate-300" htmlFor="service">
                    Help needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 ring-slate-900/10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900/60 dark:text-white dark:ring-white/10"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one…
                    </option>
                    <option>Home Wi-Fi & Networking</option>
                    <option>Computer Tune-Up (PC/Mac)</option>
                    <option>Virus & Malware Removal</option>
                    <option>Printer & Device Setup</option>
                    <option>Smart Home Support</option>
                    <option>Small Business IT Support</option>
                    <option>Not sure / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-700 dark:text-slate-300" htmlFor="message">
                  What’s happening?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 ring-slate-900/10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900/60 dark:text-white dark:ring-white/10"
                  placeholder="Example: Wi-Fi drops in the back rooms. Router is in the living room. iPhone + Dell laptop. Mesh system is Eero."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                Send message
              </button>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                Tip: include device model (PC/Mac), router brand, and any error messages.
              </p>
            </form>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900/5 p-8 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
              <h2 className="text-xl font-semibold">Direct contact</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Prefer to call or text? No problem.
              </p>

              <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/70 p-4 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Phone</div>
                    <div className="font-semibold">(574) 226-9413</div>
                  </div>
                  <a
                    href="tel:+1-574-226-9413"
                    className="rounded-xl bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-500/20 hover:bg-blue-500/15 transition dark:bg-blue-500/15 dark:text-blue-100 dark:ring-blue-500/25 dark:hover:bg-blue-500/25"
                  >
                    Call
                  </a>
                </div>

                <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/70 p-4 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
                    <div className="font-semibold">support@brandonjhunt.com</div>
                  </div>
                  <a
                    href="mailto:support@brandonjhunt.com"
                    className="rounded-xl bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-900/10 transition dark:bg-white/10 dark:text-white dark:ring-white/15 dark:hover:bg-white/15"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-b from-blue-500/10 to-transparent p-8 ring-1 ring-blue-500/20 dark:from-blue-500/15">
              <h3 className="text-lg font-semibold">What to include</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {[
                  "Device type (PC/Mac/iPhone/Android)",
                  "Router / mesh brand (Eero, Google WiFi, etc.)",
                  "Any error message screenshots",
                  "When it started + what changed",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/70 shrink-0 dark:bg-blue-400/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
