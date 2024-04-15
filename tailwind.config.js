/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#212121",
        primaryBlue: "#00204A",
        secodaryBlue: "#005792",
        tertiaryBlue: "#448EF6",
        primaryYellow: "#FDB44B",
      },
    },
  },
  plugins: [],
};
