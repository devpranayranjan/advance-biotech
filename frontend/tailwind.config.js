/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        digitalLavender: '#A78BFA',
        sophisticatedBlue: '#2C3E50',
        verdantGreen: '#4CAF50',
        apricotCrush: '#F7882F',
        mochaMousse: '#F1EDE8',
        darkGray: '#2C3E50',
        navyBlue: '#1A1A1A',
        offWhite: '#F8F8F8',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
