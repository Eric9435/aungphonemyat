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
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 overflow-y-auto border-r border-slate-800 bg-[#07111f] text-white xl:block">
      <div className="flex min-h-full flex-col px-7 py-8">
        <div>
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            Aung Phone Myat
          </h1>

          <p className="mt-4 max-w-[220px] text-[0.68rem] uppercase leading-5 tracking-[0.18em] text-slate-400">
            Airport Building Services & Automation Engineer
          </p>
        </div>

        <nav className="mt-11 space-y-9">
          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Main
            </p>

            <div className="space-y-1.5">
              {mainLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Additional
            </p>

            <div className="space-y-1.5">
              {additionalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Engineering Domains
            </p>

            <div className="space-y-2.5 text-sm leading-6 text-slate-300">
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
