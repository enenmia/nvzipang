// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ori: ['OriNewFont', 'Source Han Sans SC'], // 添加这一行！
      },
    },
  },
  plugins: [],
};
