/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        display: ["Syne", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0a0b",
          2: "#111113",
          3: "#17171a",
        },
        accent: {
          DEFAULT: "#c8f04d",
          purple: "#7b5ea7",
        },
        ink: {
          DEFAULT: "#f0ede8",
          muted: "#6b6b72",
        },
      },
    },
  },
  plugins: [],
};
