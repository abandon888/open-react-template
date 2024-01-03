/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f0f5ff',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#85a5ff',
          500: '#597ef7',
          600: '#2f54eb',
          700: '#1d39c4',
          800: '#10239e',
          900: '#061178',
        },
        purple: {
          100: '#e6fffb',
          200: '#b5f5ec',
          300: '#87e8de',
          400: '#5cdbd3',
          500: '#36cfc9',
          600: '#13c2c2',
          700: '#08979c',
          800: '#006d75',
          900: '#00474f',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      // fontFamily: {
      //   inter: ['var(--font-inter)', 'sans-serif'],
      //   'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      // },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
