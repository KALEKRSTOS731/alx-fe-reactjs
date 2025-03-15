module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [],
};