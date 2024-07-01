/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bodyC: '#F8F7FC',
        blackC: '#363853',
        orangeC: '#FF6838',
        grayC: '#AAAAAA',
        graySocial: '#EEEEEE'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      fontSize: {
        '8px': '0.5rem',
        '10px': '0.625rem',
        '14px': '0.875rem', // 14px
        '16px': '1rem',
        '18px': '1.125rem', // 18px
        '20px': '1.25rem',
        '24px': '1.5rem',
        '32px': '2rem',
        '36px': '2.25rem',
        '40px': '2.5rem',
        '66px': '4.125rem',
        '80px': '5rem'
      },
      spacing: {
        big: '33rem'
      }
    }
  },
  plugins: [],
}