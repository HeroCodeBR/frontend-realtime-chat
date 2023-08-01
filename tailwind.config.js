/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: '#023AFF',
        'blue-100': '#03009206',
        'blue-200': '#023AFF08',
        'blue-300': '#023AFF15',
        green: '#5CDE88',
        'gray-100': '#E1E1E1',
        'gray-200': '#999999',
        'gray-300': '#666666',
        black: '#333333',
      },
      borderRadius: {
        rounded: {
          100: '10px',
        },
      },
    },
  },
  plugins: [],
};
