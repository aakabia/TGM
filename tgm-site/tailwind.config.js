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
        offScreenDark:"rgb(34,37,49)", // color for hamburger menu bg
      },
      animation: {
        marquee: 'marquee 30s linear infinite', // Use the animation defined in your global CSS
        reverseMarquee: "marquee 30s linear infinite reverse", // reverse version 
      },
      keyframes: { // define how element changes at different points 
        marquee: {
          '0%': { transform: 'translateX(-50%)' }, // move element left 50% its own width 
        },
      },
    },
  },
  plugins: [],
};



// custom tailwind can be added here