import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaMusic,
  FaLanguage,
  FaBrain,
  FaNetworkWired
} from "react-icons/fa";

const systems = [
  {
    title: "Engineering Knowledge OS",
    category: "Engineering Knowledge System",
    description:
      "Large-scale engineering knowledge platform for automation, HVAC, PLC/SCADA, scientific computing, and AI engineering analytics.",
    technologies: ["Next.js", "React", "TypeScript", "Engineering OS"],
    live: "https://engineering-knowledge-os.onrender.com/",
    github: "https://github.com/Eric9435/engineering-knowledge-os",
    icon: <FaBrain />
  },
  {
    title: "Knowledge Atlas OS",
    category: "Knowledge Architecture",
    description:
      "Structured knowledge atlas platform for topic organization, knowledge mapping, and future AI retrieval systems.",
    technologies: ["Next.js", "React", "TypeScript", "Knowledge Systems"],
    live: "https://knowledge-atlas-os.onrender.com/",
    github: "https://github.com/Eric9435/knowledge_atlas_os",
    icon: <FaNetworkWired />
  },
  {
    title: "German Master OS",
    category: "Language Learning System",
    description:
      "German language learning platform for vocabulary systems, grammar organization, and self-directed study.",
    technologies: ["Next.js", "React", "TypeScript", "German Learning"],
    live: "https://german-master-os.onrender.com/",
    github: "https://github.com/Eric9435/german-master-os",
    icon: <FaLanguage />
  },
  {
    title: "Jazz Knowledge OS",
    category: "Music Theory System",
    description:
      "Jazz harmony and improvisation platform for modal systems, chord substitutions, voice leading, and harmonic analysis.",
    technologies: ["HTML", "CSS", "JavaScript", "Jazz Theory"],
    live: "https://jazz-three-plum.vercel.app/index.html",
    github: "https://github.com/Eric9435/jazz",
    icon: <FaMusic />
  },
  {
    title: "Portfolio Website",
    category: "Professional Portfolio",
    description:
      "Engineering portfolio website for industrial automation, scientific computing, projects, experience, and technical identity.",
    technologies: ["Next.js", "React", "TypeScript", "Portfolio"],
    live: "https://aungphonemyat.onrender.com/",
    github: "https://github.com/Eric9435/aungphonemyat",
    icon: <FaReact />
  }
];

export default function PortfolioSystemsSection() {
  return (
    <section id="ecosystem" className="py-14">
      <h2 className="text-3xl font-bold text-slate-950">
        Projects & Knowledge Systems
      </h2>

      <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {systems.map((system) => (
          <article
            key={system.title}
            className="rounded-2xl border border-slate-300 bg-white p-6 shadow-md"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              {system.icon}
            </div>

            <p className="text-sm font-semibold text-blue-700">
              {system.category}
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-950">
              {system.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-700">
              {system.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {system.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={system.live}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href={system.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:underline"
              >
                <FaGithub />
                Repository
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
