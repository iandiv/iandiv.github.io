import { GithubIcon, FacebookIcon, MailIcon } from "./Icons";

const links = [
  { label: "GitHub", href: "https://github.com/iandiv", icon: GithubIcon },
  { label: "Facebook", href: "https://web.facebook.com/ian.divinagracia.56", icon: FacebookIcon },
  { label: "Email", href: "mailto:iandiv29@gmail.com", icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#111113] border-t border-white/[0.07] px-4 py-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-7">
        <div className="flex gap-3 flex-wrap justify-center">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/[0.13] text-[#6b6b72] rounded-md px-5 py-2.5 text-[0.8rem] font-mono tracking-[0.05em] transition-all hover:border-blue-500/50 hover:text-blue-400 no-underline">
              <Icon className="w-3.5 h-3.5" />
              {label}
            </a>
          ))}
        </div>
        <p className="font-mono text-[0.7rem] text-[#6b6b72] tracking-[0.06em]">
          ianDiv © 2023 · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
