/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        '3/4': '3 / 4',
        '5/6': '5 / 6',
        '6/7': '6 / 7',
        '7/8': '7 / 8'
      },
      spacing: {
        76: '19rem'
      },
      lineClamp: {
        10: '10',
        12: '12'
      },
      colors: {
        pureBlue: "#0000FF"
      }
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp')
  ],
}

