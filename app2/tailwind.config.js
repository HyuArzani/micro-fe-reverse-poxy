module.exports = {
  mode: 'jit',
  presets: [],
  corePlugins: {
    preflight: false,
  },
  purge: {
    enabled: true,
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/commons/components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
