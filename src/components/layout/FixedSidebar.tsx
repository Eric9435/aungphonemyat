const mainLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Technical Notes", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

const additionalLinks = [{ label: "Music", href: "/music" }];

export default function FixedSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 overflow-y-auto border-r border-slate-800 bg-[#081421] text-white xl:block">
      <div className="flex min-h-full flex-col px-6 py-7">
        <div>
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            Aung Phone Myat
          </h1>

          <p className="mt-3 max-w-[210px] text-[0.65rem] uppercase leading-5 tracking-[0.2em] text-slate-500">
            Airport Building Services & Automation Engineer
          </p>
        </div>

        <nav className="mt-10 space-y-8">
          <div>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">
              Main
            </p>

            <div className="space-y-1">
              {mainLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">
              Additional
            </p>

            <div className="space-y-1">
              {additionalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">
              Engineering Domains
            </p>

            <div className="space-y-2 text-sm leading-5 text-slate-300">
              <p>PLC / SCADA</p>
              <p>BMS / HMI</p>
              <p>HVAC Systems</p>
              <p>Chiller Plants</p>
              <p>Scientific Computing</p>
              <p>AI Engineering</p>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
