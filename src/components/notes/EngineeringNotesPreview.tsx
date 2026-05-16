import { notes } from "@/data/notes";

export default function EngineeringNotesPreview() {
  return (
    <section id="blog" className="py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Technical Writing
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
            Engineering Notes
          </h2>
        </div>

        <a href="/notes" className="text-sm font-semibold text-blue-700 hover:underline">
          View All Notes →
        </a>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-md">
        {notes.slice(0, 3).map((note, index) => (
          <a
            key={note.slug}
            href={`/notes/${note.slug}`}
            className={`block px-8 py-6 transition hover:bg-slate-50 ${
              index !== notes.slice(0, 3).length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <div className="grid gap-4 lg:grid-cols-[140px_1fr]">
              <div>
                <p className="text-sm font-bold text-blue-700">{note.date}</p>
                <p className="mt-2 text-xs text-slate-500">{note.readingTime}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-blue-700">{note.category}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">{note.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
                  {note.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
