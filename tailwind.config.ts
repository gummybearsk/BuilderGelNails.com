import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Nude & Rose" - The Brand Core (Sophisticated, not neon)
        primary: {
          50: '#FDF2F4',
          100: '#FCE7EA',
          200: '#F8D0D9',
          300: '#F2AAB7',
          400: '#E87D92',
          500: '#D64E69', // Main Brand Pink
          600: '#BD324F',
          700: '#9E243D',
          800: '#851F34',
          900: '#701D2E',
        },
        // "Stone" - The Luxury Neutral (Replaces standard grays)
        stone: {
          50: '#FAFAF9', // Main Background
          100: '#F5F5F4', // Secondary Background
          200: '#E7E5E4', // Borders
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C', // Body Text
          600: '#57534E',
          700: '#44403C', // Headings
          800: '#292524',
          900: '#1C1917', // Dark Accents
        },
        // "Sage" - The Organic Accent
        accent: {
          500: '#5F8D78', // Muted Sage Green
          600: '#4A7260',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: 'inherit',
            a: {
              color: '#df5074',
              textDecoration: 'underline',
              '&:hover': {
                color: '#cb305a',
              },
            },
            h1: {
              fontFamily: 'Playfair Display, Georgia, serif',
            },
            h2: {
              fontFamily: 'Playfair Display, Georgia, serif',
            },
            h3: {
              fontFamily: 'Playfair Display, Georgia, serif',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
