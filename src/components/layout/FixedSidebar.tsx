const mainLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

const additionalLinks = [
  { label: "Music", href: "/music" }
];

export default function FixedSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 overflow-y-auto border-r border-slate-800 bg-[#081421] text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Aung Phone Myat</h1>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
          Airport Building Services & Automation Engineer
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">
              Main
            </p>

            <div className="space-y-2">
              {mainLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">
              Additional
            </p>

            <div className="space-y-2">
              {additionalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">
              Engineering Domains
            </p>

            <div className="space-y-2 text-sm text-slate-300">
              <div>PLC / SCADA</div>
              <div>BMS / HMI</div>
              <div>HVAC Systems</div>
              <div>Chiller Plants</div>
              <div>Scientific Computing</div>
              <div>AI Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
