import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        card: "#FFFFFF",
        panel: "#F4F4F5",
        dark: "#0F1115",
        "dark-card": "#181B20",
        "dark-border": "#272A30",
        orange: "#FF5500",
        "orange-hover": "#E04A00",
        "orange-soft": "#FFF0EB",
        ink: "#0F172A",
        "text-dim": "#64748B",
        line: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        sinhala: ["var(--font-sinhala)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
