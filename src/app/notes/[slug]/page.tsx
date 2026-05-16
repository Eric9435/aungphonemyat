import { notes } from "@/data/notes";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NoteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <article className="mx-auto max-w-4xl px-8 py-20">
        <a href="/notes" className="text-sm font-semibold text-blue-700 hover:underline">
          ← Back to Engineering Notes
        </a>

        <div className="mt-12 rounded-3xl border border-slate-300 bg-white p-10 shadow-md">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            {note.category}
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-950">
            {note.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>{note.date}</span>
            <span>•</span>
            <span>{note.readingTime}</span>
          </div>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            {note.description}
          </p>

          <div className="mt-12 space-y-10">
            {note.content.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-slate-950">
                  {section.heading}
                </h2>

                <p className="mt-4 leading-8 text-slate-700">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
