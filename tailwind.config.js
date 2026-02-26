export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: '#0B1121',
        'navy-mid': '#111827',
        'navy-light': '#1E2D45',
        cream: '#F4F1EB',
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        muted: '#8A95A3',
        border: 'rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
