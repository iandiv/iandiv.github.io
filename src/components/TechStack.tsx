const stacks = [
  {
    title: "Backend",
    tags: ["NestJS", "Node.js", "REST API", "PHP"],
  },
  {
    title: "Frontend",
    tags: ["React", "TypeScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Database & Backend",
    tags: ["MySQL", "Supabase", "Firebase"],
  },
  {
    title: "DevOps & Tools",
    tags: ["Docker", "Git", "GitHub"],
  },
  {
    title: "AI / ML",
    tags: ["Python", "TensorFlow", "Model Training", "Data Visualization"],
  },
  {
    title: "Other",
    tags: ["Java", "C# (.NET)", "WinUI 3", "Android (Java)", "UI/UX"],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 rounded font-mono text-[0.72rem] tracking-[0.02em] bg-white/[0.05] border border-white/[0.07] text-[#f0ede8] transition-all duration-150 hover:border-blue-500/50 hover:text-blue-400 cursor-default">
      {label}
    </span>
  );
}

function StackCell({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="bg-[#111113] p-7 transition-colors duration-200 hover:bg-[#17171a]">
      <p className="text-[0.7rem] tracking-[0.14em] uppercase text-[#6b6b72] mb-4 font-mono">
        {title}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => <Tag key={tag} label={tag} />)}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="bg-[#111113] px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#6b6b72] mb-12 flex items-center gap-4 after:content-[''] after:block after:w-16 after:h-px after:bg-white/[0.13]">
          02 — Tech Stack
        </p>
        <div
          className="fade-up grid border border-white/[0.07] rounded-xl overflow-hidden"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.07)" }}
        >
          {stacks.map((s) => <StackCell key={s.title} title={s.title} tags={s.tags} />)}
        </div>
      </div>
    </section>
  );
}
