/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "selector",
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        p100: "#edf4ff",
        p200: "#dfe9ff",
        p300: "#c5d7ff",
        p400: "#a2bcff",
        p500: "#748ffc",
        p600: "#5e71f6",
        p700: "#2c32a7",
        p800: "#2b3184",
        p900: "#191b4d",

        bgDark: "#0A0A0A",
        bgLight: "#fff",
      },
    },
  },
  plugins: [],
}
