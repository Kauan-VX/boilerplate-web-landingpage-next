import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      height: {
        heightLessNav: 'h-[calc(100vh-64px)]',
      },
      screens: {
        phoneMax: { max: '500px' },
        smMax: { max: '640px' },
        mdMax: { max: '768px' },
        lgMax: { max: '1024px' },
      },
      maxWidth: {
        '8xl': '1440px',
      },
      colors: {
       'text-color' : '#000000',
       'main-color': '#302b2b',
       'primary-bg': '#fff',
       'secondary-bg': '#e9e9e9',
        dark: {
          background: '#000',
          text: '#ffffff',
        },
        light: {
          background: '#fff',
          text: '#000',
        },
      },
    },
  },
  plugins: [nextui()],
}
export default config
