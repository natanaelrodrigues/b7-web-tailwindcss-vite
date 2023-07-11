/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'vermelho': '#FF0000',
        'vermelhoescuro': '#990000'
      }
    },
  },
  plugins: [],
};
