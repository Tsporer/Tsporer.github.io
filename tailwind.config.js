/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      display: ["group-hover"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      charcoal: "#36454F",
      frenchgray: "#B9C5CB",
      modblue: "#6e7dde",
      periwinkle: "#BCC3F0",
      aquamarine: "#74c991",
      aquahue: "#d5eede",
      celeste: "B2FFFF",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      gotham: ["GothamBook", "sans-serif"]
    },
  },
  plugins: [require("flowbite/plugin")],
};

