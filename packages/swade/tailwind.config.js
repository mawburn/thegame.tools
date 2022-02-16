module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tgt: '#ad0000',
      },
    },
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif'],
      tgt: ["'Bungee'", 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
