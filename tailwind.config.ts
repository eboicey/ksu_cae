import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '0.125rem', // Only slightly rounded by default
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      colors: {
        primary: '#0A2342',
        secondary: '#FFD100',
        accent: '#1D428A',
        muted: '#f3f4f6',
        card: '#fff',
      },
    },
  },
  plugins: [],
};

export default config;
