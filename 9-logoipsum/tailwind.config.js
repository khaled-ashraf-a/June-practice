/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blackC: '#19191B',
        grayLink: '#696871',
        orangeC: '#FF7143',
        borderBlue: '#5454D4',
        borderGray: '#E7E7E7',
        darkBlue: '#1D293F',
        cardGray: '#F8F8F8',
        darkRed: '#9F3919'
        
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif']
      },
      fontSize: {
        '10px': '0.625rem', // 10px
        '16px': '1rem', // 16px
        '18px': '1.125rem', // 18px
        '20px': '1.25rem', // 20px
        '24px': '1.5rem', // 24px
        '28px': '1.75rem',
        '50px': '3.125rem', // 50px
        '60px': '3.75rem', // 60px
        '80px': '5rem', // 80px
      }
    }
  },
  plugins: [],
}