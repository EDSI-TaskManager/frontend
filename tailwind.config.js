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
    },
    colors: {
      primary: "#7289DA",
      gray100: "#35373A",
      gray200: "#2B2E32",
      gray300: "#202226",
      gray400: "#181A1D",
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: [],
    },
  },
  plugins: [],
};
