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
      },
      height: {
        '128': '24rem',
      }
    },
  },
  plugins: [],
}