/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      'black': '#060608',
      'blue-gray': '#2C364C',
      'dark-gray': '#333',
      'off-white': '#DDCEBB',
      'green': '#52EA81',
      'yellow': '#DF9B49',
      'dark-pink': '#894555'
    },
  },
  plugins: [],
}