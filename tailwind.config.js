module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      /* backgroundImage: {
        'LoginPageBackground': "url('/public/images/login_bg.png')",
      } */
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
