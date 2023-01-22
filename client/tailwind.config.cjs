/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-landing': "url('./src/assets/hero.jpg')",
      },
    },
  },
  plugins: [],
}
