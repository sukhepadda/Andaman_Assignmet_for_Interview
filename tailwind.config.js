/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroHome': "url('./src/assets/bg.jpg')",
        'topAndamanGuide': "url('https://ocean.go2andaman.com/wp-content/uploads/2021/03/PB-HOME.jpg?compress=true&quality=90&w=700&dpr=1.0')",
      },
      height: {
        '128': '24rem',
      }
    },
  },
  plugins: [],
}