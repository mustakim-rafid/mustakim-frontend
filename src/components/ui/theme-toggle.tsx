"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="inline-flex items-center bg-neutral-900 border border-neutral-800 p-1 rounded-full">

      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === "light" 
            ? "bg-neutral-700 text-white shadow-sm" 
            : "text-neutral-500 hover:text-neutral-300"
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === "dark" 
            ? "bg-neutral-700 text-white shadow-sm" 
            : "text-neutral-500 hover:text-neutral-300"
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}