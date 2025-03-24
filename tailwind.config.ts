import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F3F4F6',
        success: '#ECFDF5',
        warning: '#FEF3C7',
        error: '#FEE2E2',
        info: '#DBEAFE',
        growth: '#10B981',
        decline: '#EF4444',
        alert: '#F59E0B',
        primaryText: '#111827',
        // Semantic colors
        'primary-foreground': '#111827',
        'secondary-foreground': '#4B5563',
        'muted-foreground': '#6B7280',
        border: '#E5E7EB',
        input: '#D1D5DB',
        ring: '#E5E7EB',
      },
      boxShadow: {
        soft: '0px 4px 8px rgba(0, 0, 0, 0.05)',
        hover: '0px 6px 12px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
      },
      spacing: {
        section: '1.5rem', // equivalent to mb-6
        container: '1.5rem', // equivalent to p-6
      },
      fontSize: {
        h1: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }], // text-3xl
        h2: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],     // text-2xl
        h3: ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }], // text-lg
        data: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '700' }], // text-xl
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config; 