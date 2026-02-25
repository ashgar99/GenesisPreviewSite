import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Genesis Design System — Editorial Brutalism
        'genesis-charcoal': '#1a1d21',
        'genesis-cream':    '#f8f7f4',
        'genesis-teal':     '#4a7c7c',
        'genesis-pass':     '#4a7c5c',
        'genesis-fail':     '#8c5a5a',
        'genesis-coincidence': '#7c6f4a',

        // Neutrals (Charcoal → Cream) — keep for legacy pages
        neutral: {
          950: '#0d0f11',
          900: '#1a1d21',
          800: '#2a2d31',
          700: '#3d4147',
          600: '#55595f',
          500: '#6b7280',
          400: '#9a968f',
          300: '#c4c0b9',
          200: '#e5e2dc',
          100: '#eeece7',
          50:  '#f8f7f4',
        },
        // Brand (Teal) — keep for legacy pages
        brand: {
          600: '#3a6262',
          500: '#4a7c7c',
          400: '#5d9191',
          300: '#7eb3b3',
          200: '#a8d1d1',
          100: '#dbeaea',
        },
        // Semantic — keep for legacy pages
        success: {
          600: '#3a6246',
          500: '#4a7c5c',
          400: '#6a9a7a',
        },
        error: {
          600: '#6e4848',
          500: '#8c5a5a',
          400: '#a87a7a',
        },
        warning: {
          600: '#5e5438',
          500: '#7c6f4a',
          400: '#9a8c6a',
        },
      },
      fontFamily: {
        // New Genesis type system
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono:  ['JetBrains Mono', 'Menlo', 'Consolas', 'monospace'],
        // Legacy — keep for other pages
        display: ['Newsreader', 'Georgia', 'serif'],
        body:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography scale
        'display-xl': ['clamp(2.5rem, 5vw + 1rem, 4rem)',   { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw + 0.5rem, 3rem)',   { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 2vw + 0.75rem, 2rem)',{ lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'heading-lg': ['clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)', { lineHeight: '1.3' }],
        'heading-md': ['1.125rem', { lineHeight: '1.4' }],
        'body-lg':    ['1.125rem', { lineHeight: '1.7' }],
        'body-md':    ['1rem',     { lineHeight: '1.6' }],
        'body-sm':    ['0.875rem', { lineHeight: '1.5' }],
        caption:      ['0.75rem',  { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        34: '8.5rem',
      },
      maxWidth: {
        'container-sm':  '40rem',
        'container-md':  '48rem',
        'container-lg':  '64rem',
        'container-xl':  '80rem',
        'container-2xl': '90rem',
        prose: '45rem',
      },
      // Editorial Brutalism: no border radius by default
      borderRadius: {
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        full: '9999px',
      },
      // No drop shadows — hard borders only
      boxShadow: {
        none: 'none',
        sm: 'none',
        DEFAULT: 'none',
        md: 'none',
        lg: 'none',
        xl: 'none',
      },
      transitionDuration: {
        fast:   '150ms',
        normal: '250ms',
        slow:   '400ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        in:  'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'fade-in':  'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'marquee':  'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
