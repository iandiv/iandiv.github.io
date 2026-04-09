interface NavProps {
  scrolled: boolean;
}

export default function Nav({ scrolled }: NavProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-5 transition-all duration-300 ${
        scrolled ? "bg-[rgba(10,10,11,0.85)] backdrop-blur-lg border-b border-white/[0.07]" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-3xl w-full mx-auto flex items-center justify-between">
        <a href="#home" className="font-black text-lg tracking-tight text-[#f0ede8] no-underline" style={{ fontFamily: "Poppins, sans-serif" }}>
          Ian<span className="text-blue-500">Div</span>
        </a>
        <ul className="flex gap-8 list-none m-0 p-0">
          {[
            { label: "About", href: "#about" },
            { label: "Stack", href: "#tech-stack" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="text-[#6b6b72] no-underline text-[0.7rem] tracking-[0.12em] uppercase font-mono transition-colors duration-200 hover:text-[#f0ede8]">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}