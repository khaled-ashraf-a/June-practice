/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blackish: '#222222',
        border: '#EAEAEE',
        lightGray: '#555555',
        smallGray: '#979797',
        lightPurple: '#7247CA',
        backgroundWhite: '#F5F5F7'
      },
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      fontSize: {
        '10px': '0.625rem',
        '12px': '0.75rem',
        '14px': '0.875rem',
        '16px': '1rem',
        '18px': '1.125rem',
        '19px': '1.1875rem',
        '21px': '1.3125rem',
        '26px': '1.625rem',
      }
    }
  },
  plugins: [],
}