/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#21212d",
        secondary: "#2c2c38",
        primaryWhite: "#feffff",
        primaryGray: "#888fa1",
        primaryPurple: "#645fc6",
      },
    },
  },
  plugins: [],
};
