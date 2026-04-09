export interface Project {
  title: string;
  description: string;
  image: string;
  initials: string;
  tags?: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: "App Group",
    description: "Organize, customize, and launch your apps — a clean launcher for power users.",
    image: "/img/appgroup.png",
    initials: "AG",
    tags: ["C#", "WinUI 3"],
    github: "https://github.com/iandiv/AppGroup",
  },
  {
    title: "Win11 Tweaker",
    description: "A powerful tool for personalizing and enhancing your Windows 11 experience.",
    image: "/img/win.png",
    initials: "W11",
    tags: ["C#", "WinUI 3"],

    github: "https://github.com/iandiv/Win11Tweaker",
  },
  {
    title: "GuiScrcpy++",
    description: "A GUI wrapper that simplifies scrcpy's powerful Android screen mirroring capabilities.",
    image: "/img/gui.png",
    initials: "GUI",
    tags: ["C#", "WinForms"],

    github: "https://github.com/iandiv/GuiScrcpyPlusPlus",
  },
  {
    title: "QuixCase",
    description: "One-stop solution for seamless text case conversions. Fast, clean, no friction.",
    image: "/img/quix.png",
    initials: "QC",
    tags: ["C#", "AutoHotkey"],

    github: "https://github.com/iandiv/QuixCase",
  },
  {
    title: "DeskHider",
    description: "Toggle desktop icon visibility with a double-click — dead simple, works perfectly.",
    image: "/img/desk.png",
    initials: "DH",
    tags: ["C#", "AutoHotkey"],

    github: "https://github.com/iandiv/ATBASH-Encryptor",
  },
  {
    title: "Beshiefy",
    description: "Transform regular text into beshie-speak effortlessly. A fun Filipino text transformer.",
    image: "/img/beshiefy.png",
    initials: "Bsh",
    tags: ["HTML", "JavaScript", "Bootstrap 5"],
    github: "https://github.com/iandiv/beshiefy",
  },
  {
    title: "Daily Time Tally",
    description: "A minimalist web app for tracking daily hours without the clutter.",
    image: "/img/dtt.png",
    initials: "DTT",
    tags: ["HTML", "JavaScript", "Bootstrap 5"],

    github: "https://github.com/iandiv/Daily-Time-Tally",
  },
];
