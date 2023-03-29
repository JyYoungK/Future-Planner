/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        5000: "5000ms",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
