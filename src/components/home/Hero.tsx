import Image from "next/image";
import { profile } from "@/data/profile/profile";

export default function Hero() {
  return (
    <section id="home" className="border-b border-slate-200 pb-24">
      <div className="flex items-start justify-between gap-12">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Engineering Portfolio OS
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-950 lg:text-6xl">
            {profile.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            {profile.tagline}
          </p>

          <p className="mt-8 max-w-3xl leading-8 text-slate-700">
            {profile.about}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="hidden shrink-0 lg:block">
          <div className="rounded-[1.75rem] bg-[#081421] p-2 shadow-2xl">
            <div className="overflow-hidden rounded-[1.35rem] border border-slate-700 bg-slate-900">
              <Image
                src="/profile.png"
                alt="Aung Phone Myat"
                width={170}
                height={170}
                priority
                className="h-[170px] w-[170px] object-cover"
              />
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm font-bold text-slate-950">
              Aung Phone Myat
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Automation Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
