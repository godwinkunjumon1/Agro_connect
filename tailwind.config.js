/** @type {import('tailwindcss').Config} */
export default {
  content: ["./register/*.html","./index.html","./about.html","./user/*.html","./view/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
