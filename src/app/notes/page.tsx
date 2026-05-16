import { notes } from "@/data/notes";

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-5xl px-8 py-20">
        <a href="/" className="text-sm font-semibold text-blue-700 hover:underline">
          ← Back to Portfolio
        </a>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
          Technical Writing
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">
          Engineering Notes
        </h1>

        <p className="mt-6 max-w-3xl leading-8 text-slate-700">
          Technical articles, engineering analysis, scientific computing concepts,
          and infrastructure system research notes.
        </p>

        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-md">
          {notes.map((note, index) => (
            <a
              key={note.slug}
              href={`/notes/${note.slug}`}
              className={`block px-8 py-8 transition hover:bg-slate-50 ${
                index !== notes.length - 1 ? "border-b border-slate-200" : ""
              }`}
            >
              <p className="text-sm font-bold text-blue-700">
                {note.category} • {note.date} • {note.readingTime}
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                {note.title}
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                {note.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
