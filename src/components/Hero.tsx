import { GithubIcon, FacebookIcon, MailIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden"
    >
      <div
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-3xl w-full relative">
        <div className="fade-up inline-flex items-center gap-2 font-mono text-[0.72rem] text-[#6b6b72] border border-white/[0.13] rounded-full px-4 py-1.5 mb-10 tracking-[0.08em]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          NestJS Backend Dev · Davao, PH
        </div>

        <h1
          className="fade-up font-black leading-[0.95] tracking-[-0.03em] mb-5"
          style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", transitionDelay: "0.1s", fontFamily: "Poppins, sans-serif" }}
        >
          <span className="block text-[#f0ede8]">Ian</span>
          <span className="block" style={{ color: "#3b82f6", WebkitTextStroke: "1px rgba(240,237,232,0.2)" }}>
            Div<span style={{ color: "#f0ede8", WebkitTextStroke: "0" }}>inagracia</span>
          </span>
        </h1>

        <div
          className="fade-up inline-block mb-8 px-3 py-1 rounded-md text-[0.75rem] font-mono tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20"
          style={{ transitionDelay: "0.15s" }}
        >
          Backend Web Developer
        </div>

       <p
  className="fade-up text-[#6b6b72] max-w-xl leading-[1.8] mb-10 font-light text-[0.95rem]"
  style={{ transitionDelay: "0.2s" }}
>
  Backend-focused web developer passionate about building real-world systems. Professionally, I focus on{" "}
  <strong className="text-[#f0ede8] font-normal">backend development and APIs</strong>, while also capable of
  working with full-stack solutions. My GitHub showcases Windows utilities and other personal projects.
  Always learning, experimenting, and exploring new challenges.
</p>

        <div className="fade-up flex gap-3 flex-wrap" style={{ transitionDelay: "0.3s" }}>
          <a href="https://github.com/iandiv" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 text-white rounded-md px-5 py-2.5 text-[0.8rem] font-mono font-medium tracking-[0.05em] transition-opacity hover:opacity-85 no-underline">
            <GithubIcon className="w-3.5 h-3.5" />
            Github
          </a>
          <a href="https://web.facebook.com/ian.divinagracia.56" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/[0.13] text-[#6b6b72] rounded-md px-5 py-2.5 text-[0.8rem] font-mono tracking-[0.05em] transition-all hover:border-white hover:text-[#f0ede8] no-underline">
            <FacebookIcon className="w-3.5 h-3.5" />
            Facebook
          </a>
          <a href="mailto:iandiv29@gmail.com"
            className="inline-flex items-center gap-2 border border-white/[0.13] text-[#6b6b72] rounded-md px-5 py-2.5 text-[0.8rem] font-mono tracking-[0.05em] transition-all hover:border-white hover:text-[#f0ede8] no-underline">
            <MailIcon className="w-3.5 h-3.5" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
