const currently = [
  "Next.js + TypeScript",
  "NestJS + TypeORM",
  "System design patterns",
];

const facts = [
  { label: "Degree", value: "BSIT Graduate" },
  { label: "Focus", value: "Backend & APIs" },
  { label: "Stack", value: "NestJS · React · TypeScript" },
  { label: "Currently", value: "Exploring Next.js + TypeORM" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0b] px-4 py-24 border-t border-white/[0.05]">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#6b6b72] mb-12 flex items-center gap-4 after:content-[''] after:block after:w-16 after:h-px after:bg-white/[0.13]">
          01 — About
        </p>

        <div className="fade-up grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">

          {/* Bio */}
          <div className="space-y-5">
          <p className="text-[#f0ede8] text-[1rem] leading-[1.85] font-light">
  I'm a software developer primarily focused on backend systems and web applications using{" "}
  <span className="text-blue-400">NestJS</span>,{" "}
  <span className="text-blue-400">React</span>, and{" "}
  <span className="text-blue-400">TypeScript</span>. I develop APIs, manage application logic, and design systems
  that handle data, user management, and role-based access control.
</p>
            <p className="text-[#6b6b72] text-[0.93rem] leading-[1.85] font-light">
              I have experience working on inventory and service-based systems — implementing
              structured workflows, integrating databases, and ensuring reliable data handling.
              I also build frontend interfaces with React to support and interact with backend
              services.
            </p>
            <p className="text-[#6b6b72] text-[0.93rem] leading-[1.85] font-light">
              I focus on writing clean, maintainable code and building practical solutions
              that are efficient, scalable, and aligned with real-world use cases. BSIT
              graduate, always willing to explore and learn.
            </p>

            {/* Currently exploring */}
            <div className="pt-2">
              <p className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-[#6b6b72] mb-3">
                Currently exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {currently.map((item) => (
                  <span key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.73rem] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Fact card */}
          <div className="bg-[#111113] border border-white/[0.07] rounded-xl p-6 min-w-[200px] space-y-4">
            {facts.map(({ label, value }) => (
              <div key={label}>
                <p className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-[#6b6b72] mb-0.5">{label}</p>
                <p className="text-[#f0ede8] text-[0.83rem] font-light">{value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}