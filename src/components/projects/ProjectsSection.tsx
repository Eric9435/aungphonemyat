import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
        Portfolio
      </p>
      <h2 className="mt-4 text-3xl font-bold text-slate-950">Featured Projects</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
        Selected engineering software, full-stack web applications, and knowledge systems demonstrating expertise in industrial automation, scientific computing, and modern software engineering.
      </p>

      <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          const liveLink = "demo" in project ? project.demo : project.liveUrl;
          const githubLink = "github" in project ? project.github : project.githubUrl;

          return (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-300 bg-white p-6 shadow-md"
            >
              <p className="text-sm font-semibold text-blue-700">
                {project.category}
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-950">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    className="text-sm font-semibold text-blue-700 hover:underline"
                  >
                    Live Demo
                  </a>
                )}

                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    className="text-sm font-semibold text-slate-700 hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
