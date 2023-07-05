import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        dark: "#1f1f1f",
        secondary: "#313131",
      },
    },
  },
  plugins: [],
} satisfies Config;
