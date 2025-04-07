"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-theme-black/50 transition-colors"
      aria-label="Przełącz motyw"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-theme-red" /> : <Moon className="h-5 w-5 text-theme-darkRed" />}
    </button>
  )
}

