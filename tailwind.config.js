/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 3s linear infinite'
      }
    },
    screens: {
      sm: '350px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#060608',
      'blue-gray': '#2C364C',
      'dark-gray': '#151514',
      'off-white': '#DDCEBB',
      'green': '#52EA81',
      'yellow': '#DF9B49',
      'dark-pink': '#894555',
      'red': '#FF6D60',
      'lime-yellow': '#F7D060',
      'lime-green': '#16FF00'
    },
    fontFamily: {
      'sans': ['Montserrat', 'system-ui'],
      'mono': ['Inconsolata', 'ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
    }
  },
  plugins: [],
}