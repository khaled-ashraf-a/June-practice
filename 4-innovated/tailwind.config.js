/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bodyBg: '#F8F8F8',
        veryDarkBlue: '#171832',
        brightBlue: '#2D74FF',
        veryLightGray: '#F4F4F4',
        paragraphGray: 'rgba(23, 24, 50, 0.7)'

        
      },
      fontFamily: {
        sans: ['Poppins', 'serif'],
        serif: ["Gelasio", 'serif']
      },
      fontSize: {
        '16px': '1rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '24px': '1.5rem',
        '32px': '2rem',
        '57px': '3.5625rem'
      },
      spacing: {
        veryLarge: '36rem'
      }
    }
  },
  plugins: [],
}