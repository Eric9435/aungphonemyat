import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-14">
      <h2 className="text-3xl font-bold text-slate-950">Education</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.degree} className="rounded-2xl border border-slate-300 bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-slate-950">{item.degree}</h3>
            <p className="mt-3 font-semibold text-blue-700">{item.school}</p>
            <p className="mt-2 text-sm text-slate-600">{item.location}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
