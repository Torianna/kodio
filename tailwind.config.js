/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      azure: {
        400: '#73BAFB',
        500: '#3A90F7'
      },
      'french-gray': {
        200: '#DCDFE9',
        400: '#AEB0C9',
        700: '#747191'
      },
      space: {
        950: '#1A1D46'
      },
    },
    extend: {
      margin: {
        '20px': '20px',
        '32px': '32px',
        '113px': '113px',
      },
    },
  },
  plugins: [],
}

