module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // TailwindCSSを適用するファイル
  ],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['Segoe Print', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
}