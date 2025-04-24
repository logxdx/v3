/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      /* ::: CHANGE COLORS :::
       *   You can change the colors of this template. Just uncomment a color below and comment the default color.
       *   If you want to create your own color palette, go to https://colorffy.com/dark-theme-generator and create your own color palette.
       */
      /* :: Color Palette: Yellow and Dark Grey */
      primary: {
        100: "#ffc107",
        200: "#ffc83b",
        300: "#ffce58",
        400: "#ffd572",
        500: "#ffdc8a",
        600: "#ffe3a2",
      },
      surface: {
        100: "#121212",
        200: "#282828",
        300: "#3f3f3f",
        400: "#575757",
        500: "#717171",
        600: "#8b8b8b",
      },
      "on-background": "#ffffff",
      /* */
      /* :: Color Palette: Green and Dark Blue *
      'primary': {
        100: '#0b7a75',
        200: '#378883',
        300: '#549792',
        400: '#6da5a1',
        500: '#86b4b0',
        600: '#9ec3bf'
      },
      'surface': {
        100: '#07022e',
        200: '#1f1e42',
        300: '#393658',
        400: '#524f6e',
        500: '#6d6a84',
        600: '#89869c'
      },
      'on-background': '#ffffff',
      /* */
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      body: ['"Inter"', "Helvetica", "sans-serif"],
    },
  },
  plugins: [],
};
