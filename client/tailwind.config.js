module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#43379d',
        dark: '#252f3f',
      },
      fontFamily: {
        logoFont: ['Pacifico', 'cursive'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      boxShadow: {
        menuMobile: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
