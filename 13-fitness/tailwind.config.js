/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        offWhite: '#FFFAFB',
        brightRed: '#FF2625',
        linkBrown: '#837171',
        darkBrown: '#3A1212',
        lightBrown: '#504747',
        placeholderGray: '#9B9DAC',
        pinky: '#FFF3F4'
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        figree: ['Figtree', 'sans-serif'],
        serif: ['Alegreya', 'serif'],
        abril: ['Abril Fatface', 'serif']

      },
      fontSize: {
          '12px': '0.75rem',
          '18px': '1.125rem',
          '20px': '1.25rem',
          '22px': '1.375rem',
          '24px': '1.5rem',
          '26px': '1.625rem',
          '28px': '1.75rem',
          '44px': '2.75rem',
          '80px': '5rem',
          '200px': '12.5rem',
          '300px': '18.75rem'
      }
    }
  },
  plugins: [],
}