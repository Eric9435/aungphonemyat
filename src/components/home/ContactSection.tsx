export default function ContactSection() {
  return (
    <section id="contact" className="py-24">

      <div className="rounded-[2rem] bg-[#081421] p-12 text-white shadow-2xl">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight">
              Let’s Build Engineering Systems
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Open to scientific computing, industrial automation,
              engineering software, research collaboration,
              and computational engineering opportunities.
            </p>

          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500">
                Email
              </p>

              <a
                href="mailto:aungphonemyat9435@gmail.com"
                className="mt-2 block text-2xl font-semibold text-white hover:text-blue-400"
              >
                aungphonemyat9435@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500">
                GitHub
              </p>

              <a
                href="https://github.com/Eric9435"
                target="_blank"
                className="mt-2 block text-2xl font-semibold text-white hover:text-blue-400"
              >
                github.com/Eric9435
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500">
                Phone
              </p>

              <div className="mt-2 space-y-2 text-2xl font-semibold text-white">
                <p>+959 425096424</p>
                <p>+959 772806376</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
