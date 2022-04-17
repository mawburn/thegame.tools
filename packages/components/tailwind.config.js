module.exports = {
  content: ['./src/**/*.{ts,tsx}', './.storybook/**/*.{js}'],
  theme: {
    extend: {
      colors: {
        ttl: '#3e1856',
        ttlFont: '#f5b829',
      },
      fontFamily: {
        ttl: ['"Coolvetica"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
