/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#23292E",
        primary: {
          100: "#9CC5F8",
          200: "#6FA5F3",
          300: "#4C83EE",
          400: "#3266E3",
          500: "#2652D0",
          600: "#2343A9",
          700: "#233C85",
        },
        grey: {
          100: "#CDD5E0",
          200: "#97A4B6",
          300: "#677589",
          400: "#4A5667",
          500: "#364253",
          600: "#20293A",
          700: "#101729",
        },
      },
    },
  },
  plugins: [],
};
