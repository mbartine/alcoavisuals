/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Base colors
        black: '#0a0a0a',
        'off-black': '#121212',
        charcoal: '#1a1a1a',
        white: '#f5f5f5',
        'gray-light': '#a0a0a0',
        'gray-mid': '#666666',
        // Accent colors (solid versions for interactive elements)
        accent: {
          red: '#8b0000',
          blue: '#002366',
          purple: '#300052',
          green: '#003319',
          'blue-light': '#6B8CFF',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        accent: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(1.05rem, 2.4vw, 1.8rem)',
        h1: 'clamp(2.5rem, 6vw, 5rem)',
        h2: 'clamp(1.75rem, 4vw, 3rem)',
        h3: 'clamp(1.75rem, 3.5vw, 2.5rem)',
        body: 'clamp(1.5rem, 2vw, 1.75rem)',
        small: '1.25rem',
        caption: '1rem',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '12rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        fast: '200ms',
        normal: '400ms',
        slow: '800ms',
      },
      letterSpacing: {
        headline: '0.05em',
      },
      lineHeight: {
        body: '1.6',
      },
    },
  },
  plugins: [],
};
