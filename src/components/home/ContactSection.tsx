import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="rounded-[2rem] bg-[#081421] p-12 text-white shadow-2xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight">
              Let’s Build Engineering Systems
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Open to scientific computing, industrial automation, engineering
              software, research collaboration, and computational engineering
              opportunities.
            </p>
          </div>

          <div className="space-y-7">
            <a
              href="mailto:aungphonemyat9435@gmail.com"
              className="flex items-start gap-4 transition hover:text-blue-300"
            >
              <FaEnvelope className="mt-1 text-xl text-blue-400" />
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Email
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  aungphonemyat9435@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Eric9435"
              target="_blank"
              className="flex items-start gap-4 transition hover:text-blue-300"
            >
              <FaGithub className="mt-1 text-xl text-blue-400" />
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  GitHub
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  github.com/Eric9435
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/aung-phone-myat-eric9435"
              target="_blank"
              className="flex items-start gap-4 transition hover:text-blue-300"
            >
              <FaLinkedin className="mt-1 text-xl text-blue-400" />
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  LinkedIn
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  linkedin.com/in/aung-phone-myat-eric9435
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="mt-1 text-xl text-blue-400" />
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Phone
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  +959 425096424
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  +959 772806376
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
