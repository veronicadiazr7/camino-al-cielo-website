/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6e8ff',
          100: '#c0c4ff',
          200: '#9aa0ff',
          300: '#747cff',
          400: '#4e58ff',
          500: '#2c36ff',
          600: '#2428cc',
          700: '#1d1f99',
          800: '#151766',
          900: '#0d0e33',
        },
        secondary: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080', // neutral gray
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
        tertiary: {
          50: '#f5f0ff',
          100: '#e0d6ff',
          200: '#c6baff',
          300: '#ac9eff',
          400: '#9282ff',
          500: '#7a66ff', // light purple accent
          600: '#614dcc',
          700: '#493799',
          800: '#302066',
          900: '#181033',
        },
      },
    },
  },
  plugins: [],
};

export default config;