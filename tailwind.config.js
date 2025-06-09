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

      arc_purple: "#4e4460",
      arc_bg: "#ecf5ee",
      arc_greenblue: "#55a4bd",
      arc_green: "#49866e",
      arc_pink: '#dc9cce',
      arc_red: '#b74866',
      arc_blue: '#5fafd0',
      arc_deeppurple: '#55385a',

      amaranth: '#A30B37', 
      old_rose: '#BD6B73', 
      periwinkle_2: '#BBB6DF', 
      periwinkle_3: '#C6C8EE', 
      white_2: '#FCFCFF'
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      gotham: ["GothamBook", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};

