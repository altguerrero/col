module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: false
    },
    extend: {
      colors: {
        primary: {
          light: "#CAA55E",
          dark: "#F6DA13"
        },
        secondary: "#2D4077",
        link: "#00D1E8",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
