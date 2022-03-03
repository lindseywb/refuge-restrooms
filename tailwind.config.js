module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kimberly': {
            '50': '#f8f8fc',
            '100': '#f1f0fa',
            '200': '#e3e0f2',
            '300': '#ccc9e3',
            '400': '#9890bc',
            '500': '#6e6597',
            '600': '#4b436d',
            '700': '#372f59',
            '800': '#231b3e',
            '900': '#150c2d',
        },
      }
    },
  },
  plugins: [],
}
