import type { Config } from 'tailwindcss'
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
      fontFamily: {
        opensans: ['var(--openSans)'],
      },
    },
    colors: {
      ...colors,
      primary: '#D92D54',
      secondary: '#EFE1EC',
      gray10: '#1A1A1A',
      gray14: '#242424',
      gray30: '#4D4D4D',
      gray50: '#808080',
      textBase: '#BABABA',
      textSecondaryPrize: '#7352E8',
      textPrimary: '#EFE1EC',
    },
  },
  plugins: [],
}
export default config
