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
        sky: "#cfe7f1",
        "sky-ink": "#263c4a",
        "sky-muted": "#627784",
        "sky-accent": "#5b9fbd",
      },
      fontFamily: {
        display: ["Merriweather", "Georgia", "serif"],
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
