/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    (function ({ addUtilities }) {
      addUtilities({
        '.my-rotate-y-180': {
          transform: "rotateY(180deg)",
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        }
      });
    }),
  ],
}

