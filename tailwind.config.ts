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
        // Primary - soft pink/mauve for nail niche
        primary: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d9',
          300: '#f4aabb',
          400: '#ec7a96',
          500: '#df5074',
          600: '#cb305a',
          700: '#ab2349',
          800: '#8f2041',
          900: '#7a1f3c',
          950: '#440c1d',
        },
        // Secondary - warm neutral
        secondary: {
          50: '#f9f7f5',
          100: '#f2ede8',
          200: '#e4d9ce',
          300: '#d2c0ad',
          400: '#bea28a',
          500: '#b08c70',
          600: '#a37a63',
          700: '#886453',
          800: '#6f5347',
          900: '#5b463c',
          950: '#30231e',
        },
        // Accent - teal for trust/professional
        accent: {
          50: '#effefa',
          100: '#c8fff1',
          200: '#91fee4',
          300: '#52f6d4',
          400: '#1ee4bf',
          500: '#05c8a6',
          600: '#01a188',
          700: '#06806e',
          800: '#0a6559',
          900: '#0d534a',
          950: '#00332e',
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
