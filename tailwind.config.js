/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
  plugins: [require("tailwindcss-animated")],
};
