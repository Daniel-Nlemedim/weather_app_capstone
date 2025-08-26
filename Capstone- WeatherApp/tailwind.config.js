// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = [
  // These paths tell Tailwind where to look for class names
  // Adjust if your project structure is different
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = [];
