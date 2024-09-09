/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        antiquewhite: '#FAEBD7',
      },
      fontFamily: {
        mono: ["Source Code Pro", 'monospace'],
      },
    },
  },
  plugins: [],
}

