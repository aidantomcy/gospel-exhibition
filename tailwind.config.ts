import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        dark: "#111010",
        secondary: "#1f1f1f",
      },
    },
  },
  plugins: [],
} satisfies Config;
