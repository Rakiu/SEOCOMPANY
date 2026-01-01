/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",   // ✅ THIS LINE IS REQUIRED
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
