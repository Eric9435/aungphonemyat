export default function MusicPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-5xl px-10 py-20">

        <a
          href="/"
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          ← Back to Portfolio
        </a>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
          Additional Qualification
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">
          Music & Performance
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700">
          Musical studies and performance experience developed alongside
          engineering and technical education.
        </p>

        <div className="mt-14 rounded-3xl border border-slate-300 bg-white p-10 shadow-md">

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                Piano Performance
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Classical and jazz piano studies including harmony,
                improvisation, accompaniment, and performance practice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                Choir Conducting & Music Education
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Experience in choir conducting, music teaching,
                ensemble coordination, and nonprofit music activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                Music Technology & Theory
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                Studies in jazz harmony, arranging, music analysis,
                mixing/mastering, and music software workflows.
              </p>
            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
