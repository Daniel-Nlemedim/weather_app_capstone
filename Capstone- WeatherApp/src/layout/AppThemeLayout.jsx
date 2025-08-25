import { useEffect, useState } from "react";

function AppThemeLayout({ children }) {
  const savedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div>
      {typeof children === "function"
        ? children({ isDarkMode, toggleDarkMode })
        : children}
    </div>
  );
}

export default AppThemeLayout;
