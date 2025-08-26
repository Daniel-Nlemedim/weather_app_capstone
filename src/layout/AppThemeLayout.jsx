import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function AppThemeLayout({ children }) {
  const savedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Pass darkMode state + toggle to children
  return typeof children === "function"
    ? children({ isDarkMode, toggleDarkMode })
    : children;
}

export default AppThemeLayout;
