module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Raleway', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#18181b',
          raised: '#27272a',
          muted: '#3f3f46',
        },
        accent: {
          DEFAULT: '#f43f5e',
          soft: '#fb7185',
          glow: 'rgba(244, 63, 94, 0.45)',
        },
      },
      boxShadow: {
        card: '0 25px 50px -12px rgba(0, 0, 0, 0.55)',
        'accent-glow': '0 0 40px rgba(244, 63, 94, 0.25)',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(244, 63, 94, 0.12), transparent)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
