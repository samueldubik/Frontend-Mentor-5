module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'dark-gray-blue' : '#48556a',
      'gray-blue' : '#9eafc2',
      'dark-desaturated-blue': '#6d7f97',
      'light-gray-blue' : '#ecf2f8',
      'white' : '#ffffff'
    },

    fontFamily: {
      Manrope: ['Manrope']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
