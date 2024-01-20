/** @type {import('postcss-load-config').Config} */
const config = {
  // plugins: [require("autoprefixer"), require("postcss-nested")],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

module.exports = config;
