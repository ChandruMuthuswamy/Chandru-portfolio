/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#7DC9DA',
        'deep-blue': '#2E5C74',
        'leafy-green': '#4A944D',
        'light-beige': '#DAD2C7',
        'charcoal': '#2B2B2B',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'fadeInUp': 'fadeInUp 0.5s ease-out',
        'scaleIn': 'scaleIn 0.3s ease-in-out',
        'slideDown': 'slideDown 0.2s ease-out',
      },
    },
  },
  plugins: [],
};