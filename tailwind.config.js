// /** @type {import('tailwindcss').Config} */

module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3730a3",
          secondary: "#4f46e5",
          accent: "#fbbf24",
          neutral: "#ff00ff",
          "base-100": "#ffffff",
          info: "#0000ff",
          success: "#22c55e",
          warning: "#10b981",
          error: "#e11d48",
        },
      },
    ],
  },
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
      daisyui: {
        themes: ["mytheme"],
      },
    },
  },
  plugins: [require("daisyui")],
};
