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
        cream: "#F7F2E6",
        panel: "#FCFAF3",
        forest: "#16302A",
        "forest-soft": "#1F4136",
        terracotta: "#C1642E",
        "terracotta-soft": "#F1DECB",
        ink: "#1C231F",
        "text-dim": "#6D6459",
        line: "#E6DEC9",
        "green-text": "#D8E6DD",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
