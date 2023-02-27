const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      xs: ["12px", { lineHeight: "14px" }],
      sm: ["14px", { lineHeight: "16px" }],
      base: ["18px", { lineHeight: "20px" }],
      lg: ["24px", { lineHeight: "26px" }],
      xl: ["32px", { lineHeight: "34px" }],
      "2xl": ["42px", { lineHeight: "44px" }],
      "3xl": ["54px", { lineHeight: "56px" }],
      "4xl": ["64px", { lineHeight: "66px" }],
      "5xl": ["72px", { lineHeight: "74px" }],
      "6xl": ["84px", { lineHeight: "86px" }],
      "7xl": ["92px", { lineHeight: "94px" }],
      "8xl": ["96px", { lineHeight: "98px" }],
      "9xl": ["100px", { lineHeight: "102px" }],
    },
    extend: {
      colors: {
        simplyrooted: {
          100: "#ECE5E0",
          200: "#E4DBD4",
          300: "#D5C6BB",
          400: "#B69B88",
          500: "#A6866F",
          600: "#896A54",
          700: "#664F3F",
          800: "#43342A",
          900: "#211914",
        },
      },
      fontFamily: {
        sans: ["Paper Daisy", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "2xl": "40rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
