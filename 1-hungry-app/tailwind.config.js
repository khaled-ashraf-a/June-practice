/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blackC: "#03101A",
        brightBlue: '#1F98F0',
        smallGray: '#6D7073',
        footerBlack: '#03101A'
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        work: ['Work Sans', 'serif']
      },
      fontSize: {
        '14px': '0.875rem', // 14px
        '16px': '1rem', // 16px
        '18px': '1.125rem', // 18px
        '20px': '1.25rem', // 20px
        '22px': '1.375rem', // 21px
        '28px': '1.75rem', // 28px
        '30px': '1.875rem', // 30.950000762939453px
        '38px': '2.375rem', // 38px
        '52px': '3.25rem' // 51px
      }
      
    }
  },
  plugins: [],
}