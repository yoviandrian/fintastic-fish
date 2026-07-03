import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep sea navy — primary dark surfaces
        navy: {
          950: "#061826",
          900: "#0B2545",
          800: "#123A63",
          700: "#1B4E80",
        },
        // Teal — brand / links / icons
        teal: {
          700: "#0B5D66",
          600: "#0E7C86",
          500: "#149AA3",
          400: "#3FB6BE",
        },
        // Aqua — light accents, badges, backgrounds
        aqua: {
          300: "#8CE9DD",
          400: "#5EEAD4",
          500: "#2FD9C4",
        },
        // Sand — page background / neutral
        sand: {
          50: "#F7FAF9",
          100: "#EEF3F1",
          200: "#E2EAE7",
        },
        // Sunset — primary CTA (orange) + secondary accent (amber/yellow)
        sunset: {
          600: "#E8631A",
          500: "#FF7A29",
          400: "#FF9955",
        },
        amber: {
          400: "#FFC94A",
          300: "#FFDA82",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        tag: "0 12px 24px -12px rgba(11, 37, 69, 0.35)",
        card: "0 10px 30px -14px rgba(11, 37, 69, 0.25)",
      },
      backgroundImage: {
        "rope-dash":
          "repeating-linear-gradient(90deg, currentColor 0 10px, transparent 10px 18px)",
      },
      borderRadius: {
        tag: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
