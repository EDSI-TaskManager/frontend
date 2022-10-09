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
      },
    },
    colors: {
      primary: "#5B6EAE",
      gray100: "#35373A",
      gray200: "#2B2E32",
      gray300: "#202226",
      gray400: "#181A1D",
      white: "#fff",
    },
  },
  plugins: [],
};
