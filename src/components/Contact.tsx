import { MailIcon, GithubIcon, FacebookIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#111113] px-4 py-24 border-t border-white/[0.05]">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#6b6b72] mb-12 flex items-center gap-4 after:content-[''] after:block after:w-16 after:h-px after:bg-white/[0.13]">
          04 — Contact
        </p>

        <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Left — CTA copy */}
          <div>
            <h2 className="font-black text-[clamp(1.8rem,4vw,2.5rem)] leading-tight tracking-tight mb-4 text-[#f0ede8]"
              style={{ fontFamily: "Poppins, sans-serif" }}>
              Let's work<br />
              <span className="text-blue-500">together.</span>
            </h2>
            <p className="text-[#6b6b72] text-[0.9rem] leading-[1.8] font-light max-w-xs">
              Open to backend roles, freelance projects, or just a good conversation
              about systems and code. Drop me a message anytime.
            </p>
          </div>

          {/* Right — contact options */}
          <div className="space-y-3">
            {/* Email — primary */}
            <a href="mailto:iandiv29@gmail.com"
              className="flex items-center gap-4 p-4 bg-blue-500/10 border border-blue-500/25 rounded-xl no-underline group transition-all hover:border-blue-500/50 hover:bg-blue-500/15">
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <MailIcon className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-blue-400/70 mb-0.5">Email</p>
                <p className="text-[#f0ede8] text-[0.88rem] group-hover:text-blue-400 transition-colors">
                  iandiv29@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/iandiv" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-[#17171a] border border-white/[0.07] rounded-xl no-underline group transition-all hover:border-white/[0.15]">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <GithubIcon className="w-4 h-4 text-[#6b6b72]" />
              </div>
              <div>
                <p className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[#6b6b72] mb-0.5">GitHub</p>
                <p className="text-[#f0ede8] text-[0.88rem] group-hover:text-white transition-colors">
                  github.com/iandiv
                </p>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://web.facebook.com/ian.divinagracia.56" target="_blank" rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-[#17171a] border border-white/[0.07] rounded-xl no-underline group transition-all hover:border-white/[0.15]">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <FacebookIcon className="w-4 h-4 text-[#6b6b72]" />
              </div>
              <div>
                <p className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-[#6b6b72] mb-0.5">Facebook</p>
                <p className="text-[#f0ede8] text-[0.88rem] group-hover:text-white transition-colors">
                  Ian Divinagracia
                </p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}