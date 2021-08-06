module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        textColor: {
        'primary': '#635F5D', 
        'green': '#137B80',
 
      },
      fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
      }
      
    },
      
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
