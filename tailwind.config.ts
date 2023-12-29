import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        dark: {
          primary: "#111010",
          secondary: "#1f1f1f",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
