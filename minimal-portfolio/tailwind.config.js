/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-beige': {
          50: '#faf8f3',
          100: '#f4f0e6',
          200: '#e8dcc6',
          300: '#dcc8a6',
          400: '#d0b486',
          500: '#c4a066',
          600: '#b8924d',
          700: '#9a7a40',
          800: '#7c6233',
          900: '#5e4a26',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
