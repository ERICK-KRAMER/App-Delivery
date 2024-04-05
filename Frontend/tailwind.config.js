/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:  (_theme) => ({
        'custom-background': "url('https://painel.zeppy.com.br/storage/1/shops/1/34fa783b-bg-hamburguer.jpeg')",
      }),
    },
  },
  plugins: [],
}

