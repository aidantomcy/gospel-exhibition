"use client";

import { useEffect, useState } from "react";
import Sun from "./_icons/Sun";
import Moon from "./_icons/Moon";

const ThemeButton = () => {
  type Themes = "dark" | "light";
  const [theme, setTheme] = useState<Themes>("dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <button
      className="flex justify-center items-center bg-slate-300 p-2 rounded-md dark:bg-gray-800"
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
          window.document.documentElement.classList.remove("dark");
        } else if (theme === "light") {
          setTheme("dark");
          window.document.documentElement.classList.add("dark");
        }
      }}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeButton;
