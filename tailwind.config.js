module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        flux: '#b91d22',
        fluxDark: '#7f1416',
      },
      backgroundImage: {
        propBg: "url('/propbg.webp')",
      },
    },
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif'],
      flux: ["'Orbitron'", 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
