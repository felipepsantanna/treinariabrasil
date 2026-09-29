/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F8FAFC',       // Clean background
          surface: '#FFFFFF',     // Clean pure white surface
          card: '#FFFFFF',        // Card background
          border: '#E2E8F0',      // Soft clean border
          'border-dark': '#CBD5E1',
          dark: '#0F172A',        // Slate 900 for dark accents/footer
          accent: '#059669',      // Refined Emerald green (clean & trusted)
          'accent-hover': '#047857',
          'accent-light': '#10B981',
          'accent-subtle': '#ECFDF5', // 50 emerald for badges
          blue: '#2563EB',
          'blue-dark': '#1D4ED8',
          cyan: '#0284C7',
          gold: '#D97706',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.08), rgba(37, 99, 235, 0.04) 40%, transparent 70%)',
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'clean-md': '0 4px 16px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -2px rgba(15, 23, 42, 0.04)',
        'clean-lg': '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
      },
    },
  },
  plugins: [],
};
