// tailwind.config.js
module.exports = {
  darkMode: 'class', // This allows us to use 'dark:' and 'light:' logic
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}