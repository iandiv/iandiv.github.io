import { useState } from "react";
import { GithubIcon } from "./Icons";
import { projects, type Project } from "../data/projects";

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      className="fade-up bg-[#111113] border border-white/[0.07] rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:border-blue-500/30 hover:-translate-y-0.5"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="w-full aspect-video bg-[#17171a] flex items-center justify-center overflow-hidden">
        {imgError ? (
          <span className="font-black text-2xl text-white/[0.1]" style={{ fontFamily: "Poppins, sans-serif" }}>
            {project.initials}
          </span>
        ) : (
          <img
            src={project.image} alt={project.title}
            className="w-full h-full object-cover object-top brightness-[0.85] transition-[filter] duration-300 hover:brightness-100"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="font-bold text-base text-[#f0ede8]" style={{ fontFamily: "Poppins, sans-serif" }}>
          {project.title}
        </p>
        <p className="text-[0.83rem] text-[#6b6b72] leading-[1.65] flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded text-[0.68rem] font-mono bg-blue-500/8 text-blue-400/70 border border-blue-500/15">
                {tag}
              </span>
            ))}
          </div>
        )}

        <a href={project.github} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] tracking-[0.04em] text-[#6b6b72] no-underline transition-colors hover:text-blue-400">
          <GithubIcon className="w-3 h-3" />
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0b] px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#6b6b72] mb-12 flex items-center gap-4 after:content-[''] after:block after:w-16 after:h-px after:bg-white/[0.13]">
          03 — Hobby Projects
        </p>
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}