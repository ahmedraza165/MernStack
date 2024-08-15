const withMT = require("@material-tailwind/react/utils/withMT");
import { tailwindConfig } from '@storefront-ui/react/tailwind-config';
module.exports = withMT({
  presets:[tailwindConfig],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@storefront-ui/react/**/*.{js,mjs}'],
  theme: {
    extend: {},
  },
  plugins: [],
});






