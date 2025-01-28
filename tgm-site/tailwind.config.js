/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: "rgb(var(--emerald))",
        emeraldOp:"rgba(2, 138, 15, 0.8)",
      },
    },
  },
  plugins: [],
};



// custom tailwind can be added here