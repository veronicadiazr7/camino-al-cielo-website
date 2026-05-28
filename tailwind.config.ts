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
          DEFAULT: '#b79a59',
          muted: '#faf8f2',
          50: '#faf8f2',
          100: '#f3ead6',
          200: '#e8d6ad',
          300: '#dfbf7c',
          400: '#d8b46a',
          500: '#c9a85f',
          600: '#b79a59',
          700: '#9c7b32',
          800: '#5c4314',
          900: '#221807',
        },
        tertiary: {
          50: '#f8f8fa',
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#cccccc',
          400: '#b3b3b3',
          500: '#999999',
          600: '#808080',
          700: '#666666',
          800: '#333333',
          900: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
};

export default config;
