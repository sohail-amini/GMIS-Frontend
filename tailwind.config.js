/** @type {import('tailwindcss').Config} */

/* 
000C42 dark blue
6CC6B0 greenish
04A6CD teal blue
365BA9 blue
f1f1f2 light grey
Gradient: linear-gradient(to right, #6CC6B0 0%,#04A6CD 50%,#365BA9 100%)
*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4b49ac",
        secondary: "#04A6CD",
      },
      screens: {
        "sm-md": { min: "450px", max: "639px" },
      },
      backgroundImage: {
        "btn-gradient":
          "linear-gradient(to right, #6CC6B0 0%, #04A6CD 50%, #365BA9 100%)",
      },
      textDecoration: ["textGradient"],
    },
  },
  plugins: [],
};
