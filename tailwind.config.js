// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primaryBlack: "#212121",
        primaryBlue: "#00204A",
        secondaryBlue: "#005792",
        tertiaryBlue: "#448EF6",
        primaryYellow: "#FDB44B",
        customGrey: "#F5F5F5",
        customWhite: "#FBFBFB",
      },
    },
  },
  plugins: [],
});
