/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // "Peacock & Marigold": deliberately NOT Hyundai blue. Peacock green + festival marigold.
        brand: {
          50: '#EDFAF8',
          100: '#CBF0EB',
          500: '#12A497',
          600: '#008C83',
          700: '#007A73', // primary: white text 5.3:1
          800: '#05625C',
          900: '#04403D', // deep peacock: hero, headings
        },
        accent: { DEFAULT: '#FFB31A', dark: '#F29D00' }, // marigold: always dark text on it
        hibiscus: '#D11D55', // small tags only, white text
        cream: '#FFF7E8', // soft section background
        line: '#F2DDB0', // borders on cream
        ink: '#10302E',
        wa: { DEFAULT: '#25D366', dark: '#1ebe5b' },
      },
      fontFamily: {
        sans: [
          '"Instrument Sans Variable"',
          '"Noto Sans Devanagari Variable"',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        // Headlines: a soft, characterful serif with a matching Devanagari serif for Marathi.
        display: [
          '"Fraunces Variable"',
          '"Noto Serif Devanagari Variable"',
          'Georgia',
          'serif',
        ],
      },
    },
  },
  plugins: [],
}
