/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./error.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "poster-bg": "#122c38",
        "poster-mint": "#00ca9a",
        "poster-pink": "#f596aa",
      },
      fontFamily: {
        display: ["Syne", "Anton", "ui-sans-serif", "system-ui", "sans-serif"],
        accent: ["Merriweather", "Georgia", "serif"],
        sans: [
          '"Plus Jakarta Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
