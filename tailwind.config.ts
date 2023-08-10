import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/Table/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3751FF',
        lightBlue: '#DDE2FF',
        gray: '#F7F8FC',
        green: '#29CC97',
        darkGray: '#9FA2B4',
        black: '#363740',
        white: '#FFFFFF',
        lightGray: '#A4A6B3',
      },
      borderColor: {
        gray: '#DFE0EB',
        lightGray: '#F0F1F7',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }: any) {
      addBase({
        body: { backgroundColor: theme('colors.gray') },
      });
    },
  ],
};
export default config;
