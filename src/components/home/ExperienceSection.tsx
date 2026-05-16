import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-slate-950">Professional Experience</h2>

      <div className="mt-10 space-y-6">
        {experiences.map((item) => (
          <article key={item.company} className="rounded-2xl border border-slate-300 bg-white p-8 shadow-md">
            <p className="text-sm font-semibold text-blue-700">{item.period}</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-950">{item.role}</h3>
            <p className="mt-1 font-semibold text-slate-700">{item.company}</p>
            <p className="mt-1 text-sm text-slate-500">{item.location}</p>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              {item.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
