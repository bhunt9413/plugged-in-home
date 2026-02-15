export default function Policies() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-700 ring-1 ring-blue-500/20 dark:text-blue-200">
          Policies
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          Payment & Service Policies
        </h1>

        <div className="mt-10 space-y-8 text-slate-700 dark:text-slate-300">
          <div>
            <h2 className="text-xl font-semibold">Payment Policy</h2>
            <p className="mt-3">
              Remote support sessions are paid securely online before the session
              begins. Once payment is confirmed, troubleshooting starts immediately.
            </p>
            <p className="mt-3">
              On-site visits are due at the time of service. Secure card payments
              (including Apple Pay) are accepted. Venmo is available upon request.
            </p>
            <p className="mt-3">
              All pricing is confirmed before work begins. There are no hidden fees.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Service Area</h2>
            <p className="mt-3">
              On-site services are available in Elkhart, Indiana and surrounding
              areas. Travel beyond the primary service area may include an
              additional fee, confirmed in advance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Cancellations</h2>
            <p className="mt-3">
              If you need to reschedule, please provide as much notice as possible.
              Same-day cancellations for on-site visits may incur a service fee.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Privacy & Data</h2>
            <p className="mt-3">
              Your personal information and device data are treated with care and
              confidentiality. No data is accessed or shared beyond what is
              necessary to resolve your issue.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
