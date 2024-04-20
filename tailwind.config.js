// /** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
  plugins: [require("daisyui")],
};
