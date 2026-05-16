import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { profile } from "@/data/profile/profile";

export default function Hero() {
  return (
    <section id="home" className="border-b border-slate-200 pb-12">
      <div className="max-w-[1450px]">

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="flex items-center gap-7">
              <div className="shrink-0 overflow-hidden rounded-2xl border border-slate-300 bg-white p-1.5 shadow-md">
                <div className="relative h-[145px] w-[145px] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/profile.jpg"
                    alt="Aung Phone Myat"
                    fill
                    priority
                    sizes="145px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h1 className="max-w-[980px] text-[3.6rem] font-bold leading-[1.03] tracking-tight text-slate-950">
                  {profile.title}
                </h1>

                <p className="mt-3 max-w-3xl text-[1.05rem] leading-8 text-slate-700">
                  {profile.tagline}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-[980px] text-justify text-[1.02rem] leading-9 text-slate-700">
              {profile.about}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Contact
              </a>
            </div>
          </div>

          <aside className="hidden rounded-2xl border border-slate-300 bg-white p-4 shadow-md lg:block">

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-700" />
                <div>
                  <p className="text-slate-500">Location</p>
                  <p className="font-semibold text-slate-950">Yangon, Myanmar</p>
                </div>
              </div>

              <a
                href="mailto:aungphonemyat9435@gmail.com"
                className="flex gap-3 transition hover:text-blue-700"
              >
                <FaEnvelope className="mt-1 text-blue-700" />
                <div>
                  <p className="text-slate-500">Email</p>
                  <p className="break-all font-semibold text-slate-950">
                    aungphonemyat9435@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Eric9435"
                target="_blank"
                className="flex gap-3 transition hover:text-blue-700"
              >
                <FaGithub className="mt-1 text-blue-700" />
                <div>
                  <p className="text-slate-500">GitHub</p>
                  <p className="font-semibold text-slate-950">github.com/Eric9435</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/aung-phone-myat-eric9435"
                target="_blank"
                className="flex gap-3 transition hover:text-blue-700"
              >
                <FaLinkedin className="mt-1 text-blue-700" />
                <div>
                  <p className="text-slate-500">LinkedIn</p>
                  <p className="font-semibold text-slate-950">linkedin.com/in/aung-phone-myat-eric9435</p>
                </div>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
