module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        flux: '#b91d22',
        fluxDark: '#7f1416',
        tgt: '#ad0000',
      },
      backgroundImage: {
        propBg: "url('https://storage.googleapis.com/thegametools/fluxfall/propbg.webp')",
      },
    },
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif'],
      flux: ["'Orbitron'", 'sans-serif'],
      tgt: ["'Bungee'", 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
