import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-slate-950">Engineering Projects</h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-2xl border border-slate-300 bg-white p-6 shadow-md">
            <p className="text-sm font-semibold text-blue-700">{project.category}</p>
            <h3 className="mt-3 text-xl font-bold text-slate-950">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-700">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {"demo" in project && project.demo && (
                <a href={project.demo} target="_blank" className="text-sm font-semibold text-blue-700 hover:underline">
                  Live Demo
                </a>
              )}

              {"github" in project && project.github && (
                <a href={project.github} target="_blank" className="text-sm font-semibold text-slate-700 hover:underline">
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
