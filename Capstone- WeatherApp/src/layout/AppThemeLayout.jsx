import { Children, useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function AppThemeLayout() {
  const savedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.classList.add("dark");
      body.setAttribute("data-theme", "dark");
    } else {
      body.classList.remove("dark");
      body.setAttribute("data-theme", "light");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
    >
      {isDarkMode ? (
        <Moon size={25} className="text-yellow-300" />
      ) : (
        <Sun size={25} className="text-orange-400" />
      )}
    </button>
  );
}

export default AppThemeLayout;
