module.exports = {
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      'sans': ['Chula', '-apple-system', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Chula', 'Georgia', 'Cambria', 'serif'],
    },
    screens: {
      // 'sm': '640px', // => @media (min-width: 640px) { ... }
      // 'md': '768px', // => @media (min-width: 768px) { ... }
      // 'lg': '1024px', // => @media (min-width: 1024px) { ... }
      // // 'xl': '1280px', // => @media (min-width: 1280px) { ... }
      'sm': '620px', // => @media (min-width: 640px) { ... }
      'md': '750px', // => @media (min-width: 768px) { ... }
      'lg': '1000px', // => @media (min-width: 1024px) { ... }
      // 'xl': '1280px', // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: "#c74851"
      }
    }
  },
  variants: {},
  plugins: [],
}
