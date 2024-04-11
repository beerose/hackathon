import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    theme: {
      fontFamily: {
        serif: ['EdgeDB', ...defaultTheme.fontFamily.serif],
        sans: ['EdgeDB', ...defaultTheme.fontFamily.serif],
      },
    },
    colors: {
      ...colors,
      primary: '#D92D54',
    },
  },
  plugins: [],
}
export default config
