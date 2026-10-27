/** @type {import('tailwindcss').Config} */
const config = {
      theme: {
        extend: {
          colors: {
            bgMain: '#F0F2F5',
            accentLime: '#CDFF71',
            hypeLime: '#E9FFA3',
            vuaPeach: '#FF9369',
            accentNeon: '#C8FF2E',
            accentPurple: '#D3B8FC',
            accentPeach: '#EE585A',
            accentCoral: '#EE585A',
            accentRed: '#CF1830',
            accentYellow: '#FFDD00',
            accentCream: '#EDE5C7',
            darkText: '#181716',
            cardBg: '#FFFFFF',
            borderSubtle: '#E2DBD0'
          },
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'Hind Siliguri', 'system-ui', 'sans-serif'],
            display: ['Fraunces', 'Georgia', 'serif'],
          }
        }
      }
    };

export default {
  // the app markup is built inside public/legacy/app.js, so Tailwind must scan it
  content: ["./index.html", "./src/**/*.{js,jsx}", "./public/legacy/app.js"],
  ...config,
};
