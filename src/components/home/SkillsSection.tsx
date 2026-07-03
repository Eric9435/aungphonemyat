import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-14">
      <h2 className="text-3xl font-bold text-slate-950">Technical Expertise</h2>

      <div className="mt-8 rounded-2xl border border-slate-300 bg-white p-8 shadow-md">
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.group}
              className="border-b border-slate-200 pb-6 last:border-b-0"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-700">
                {group.group}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                {group.items.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
