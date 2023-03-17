/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        green: '0 0 0 2px #5D9C59 inset',
        grey: '0 0 0 2px #dddddd inset',
      },
    },
    colors: {
      red: '#DF2E38',
      green: '#5D9C59',
      light_green: '#DDF7E3',
      white: '#FFFFFF',
      grey: '#dddddd',
      trans_gray: 'rgba(180, 180, 180, 0.5)',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
