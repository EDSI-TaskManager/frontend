/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        default: "url('/sun-tornado.svg')",
        groupIcon: "url('/icons/group.svg')",
        groupWhiteIcon: "url('/icons/group-white.svg')",
        add: "url('/icons/add.svg')",
      },
      animation: {
        appearFromLeft: "appearFromLeft 1s",
      },
      keyframes: {
        appearFromLeft: {
          from: { transform: "translateX(-50px)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
    colors: {
      primary: "#7289DA",
      gray: {
        100: "#35373A",
        200: "#2B2E32",
        300: "#202226",
        400: "#181A1D",
      },
      white: "#fff",
      black: "#000",
      red: "#ed4243",
      green: "#2d7d46",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: [],
    },
  },
  plugins: [],
};
