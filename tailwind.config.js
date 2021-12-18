module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        flux: '#3872F4',
        fluxDark: '#2b5abf',
      },
      backgroundImage: {
        propBg: "url('/propbg.png')",
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
