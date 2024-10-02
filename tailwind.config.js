/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    colors: {
      ntl_black: "#262626",
      ntl_gray: "#757E95",
      ntl_gray_2: "#D0D5DD",
      ngl_gray_3: "#757E95",
      ntl_white: "#Ffffff",
      ngl_white_1: "#FAFAFA",
      ngl_white_2: "#FFF8F6",
      ntl_orange: "#FE3B00",
    },
    fontSize: {
      text_84: "84px",
      text_51: "51px",
      text_48: "48px",
      text_41: "41px",
      text_40: "40px",
      text_36: "36px",
      text_32: "32px",
      text_28: "28px",
      text_26: "26px",
      
      xsm: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "36px",
    },

    screens: {
      xsm: { min: "280px", max: "639px" },
      // => @media (min-width: 280px) { ... }
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 1677px) { ... }
      "2xl": { min: "1677px" },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
