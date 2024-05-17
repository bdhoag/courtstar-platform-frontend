/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      '868': '868px',
      'lg': '1024px',
      'xl': '1280px',
      '1440': '1440px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-green': '#2B5A50'
      },
    },
  },
  plugins: [],
}
