/** @type {import('tailwindcss').Config} */
module.exports = {
  // Make tailwind available within this entrance
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    brand: "#151515",
    extend: {},
  },
  plugins: [],
}

