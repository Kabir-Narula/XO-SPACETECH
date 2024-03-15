import type { Config } from 'tailwindcss';

// If necessary, add imports for custom plugin requirements
// Here assuming 'flattenColorPalette' might be used in custom plugin

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: { // Merge this from your new configuration
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: { // Merge this from your new configuration
        scroll: {
          to: {
            transform: "translateX(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    // Here, define or import your 'addVariablesForColors' plugin
    function({ addBase, theme }: { addBase: any; theme: any }) {
      const colors = require('tailwindcss/colors');
      const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
      
      let allColors = flattenColorPalette(theme('colors'));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({ ':root': newVars });
    },
    // Other plugins can be added here
  ],
};

export default config;
