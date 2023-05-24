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
          DEFAULT: "#D49B7E",
          50: "#FFFFFF",
          100: "#FCF9F7",
          200: "#F0E3DA",
          300: "#E4CDBD",
          400: "#D9B6A0",
          500: "#CDA083",
          600: "#BD815B",
          700: "#9F6640",
          800: "#784C30",
          900: "#503320",
          950: "#3C2618",
        },
      },
      fontFamily: {
        sans: ["Hand Wide", ...defaultTheme.fontFamily.sans],
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
