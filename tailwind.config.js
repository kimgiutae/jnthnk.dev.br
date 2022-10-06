/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    screens: {
      xs: '400px',
      sm: '600px',
      md: '800px',
      lg: '1000px',
      xl: '1200px',
      '2xl': '1400px'
    },
    colors: {
      gray: '#757575',
      black: '#000',
      white: '#fff',
      primary: '#0277BD',
      secondary: '#ffa000',
      transparent: 'transparent'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
