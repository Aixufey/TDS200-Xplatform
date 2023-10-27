/** @type {import('tailwindcss').Config} */
module.exports = {
  // Make tailwind available within this entrance
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      colors: {
        system: {
          brand: "#151515",
          brand2: "#F8CC18",
          brand3: "#1B3008",
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
