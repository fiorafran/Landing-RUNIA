/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores del proyecto
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb', // Azul tecnológico principal
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Verde éxito
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Naranja energía
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'floatDelayed 8s ease-in-out infinite',
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'float-slower': 'floatSlower 12s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) translateZ(0)' },
          '100%': { opacity: '1', transform: 'translateY(0) translateZ(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px) translateZ(0)', opacity: '0' },
          '100%': { transform: 'translateY(0) translateZ(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0) translateZ(0)' },
          '50%': { transform: 'translateY(-10px) translateZ(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) translateZ(0)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg) translateZ(0)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) translateZ(0)' },
          '50%': { transform: 'translateY(-15px) rotate(-180deg) translateZ(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1) translateZ(0)' },
          '50%': { transform: 'translateY(-10px) scale(1.1) translateZ(0)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px) scale(1) translateZ(0)' },
          '50%': { transform: 'translateY(-8px) scale(1.05) translateZ(0)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translateY(0px) scale(1) translateZ(0)' },
          '50%': { transform: 'translateY(-5px) scale(1.02) translateZ(0)' },
        },
      },
      // Optimizaciones de performance
      transitionProperty: {
        'all': 'all',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      // Optimizaciones de espaciado
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Optimizaciones de breakpoints
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    // Plugin para optimización de performance
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.performance-optimized': {
          'transform': 'translateZ(0)',
          'backface-visibility': 'hidden',
          'perspective': '1000px',
        },
        '.scroll-optimized': {
          'scroll-behavior': 'smooth',
          'scroll-padding-top': '2rem',
        },
        '.text-optimized': {
          'text-rendering': 'optimizeLegibility',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        '.image-optimized': {
          'image-rendering': '-webkit-optimize-contrast',
          'image-rendering': 'crisp-edges',
        },
        '.svg-optimized': {
          'shape-rendering': 'geometricPrecision',
        },
      }
      addUtilities(newUtilities)
    }
  ],
  // Optimizaciones de purging
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Optimizaciones de core plugins
  corePlugins: {
    preflight: true,
    container: false,
  },
} 