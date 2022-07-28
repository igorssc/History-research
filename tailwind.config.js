/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        home: "url(../../public/background-home.png)",
        flag: "url(../../public/background-flag.jpg)",
        cavalry: "url(../../public/background-cavalry.jpg)",
        dictatorship: "url(../../public/background-dictatorship.jpg)",
      },
    },
  },
  plugins: [],
};
