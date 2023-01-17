/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      // primary
      'light-red': 'hsl(356, 100%, 66%)',
      'very-light-red': 'hsl(355, 100%, 74%)',
      'very-dark-blue': 'hsl(208, 49%, 24%)',
      // neutral
      'white': 'hsl(0, 0%, 100%)',
      'light-gray': '#EFEFF1',
      'grayish-blue': 'hsl(240, 2%, 79%)',
      'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
      'very-dark-black-blue': 'hsl(240, 10%, 16%)',
      // gradient
      'very-light-red': 'hsl(13, 100%, 72%)',
      'light-red': 'hsl(353, 100%, 62%)',
      'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
      'very-dark-gray-desaturated-blue': 'hsl(237, 23%, 32%)',
      'cta-hover': '#FF7B86',
    },
    fontFamily: {
      'heading': ['"Overpass"', 'sans-serif'],
      'body': ['"Ubuntu"', 'sans-serif'],
    },
    extend: {
      backgroundPosition: {
        'right-top-4': 'right -80rem top -83rem',
        'right-top-3': 'right -33rem top -15rem',
      }
    },
  },
  plugins: [],
}
