/**
 * Future Forward 2026 — Tailwind preset
 *
 * Mirrors tokens/tokens.json. If you change a value, change it in the JSON
 * first and mirror it here and in tokens.css.
 *
 *   // tailwind.config.js
 *   module.exports = { presets: [require('./tokens/tailwind.preset.js')] };
 *
 * Sizes are px on the 1080×1350 reference canvas, same as the rest of the
 * system — this preset is for building the graphics, not a responsive site.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        ff: {
          acid: '#DCFF00',
          'acid-dim': '#C4E300',
          ink: '#0E0E0E',
          'ink-pure': '#000000',
          'ink-2': '#333333',
          'ink-3': '#555555',
          'ink-4': '#888888',
          paper: '#FAFAFA',
          surface: '#F7F7F7',
          'surface-2': '#F0F0F0',
          hairline: '#E8E8E8',
          'hairline-strong': '#D8D8D8',
          white: '#FFFFFF',
          'navy-ink': '#08111F',
          navy: '#0F1D33',
          'navy-glow': '#263961',
        },
      },

      fontFamily: {
        display: ['Sora', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Barlow', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
        serif: ['Noto Serif Display', 'Times New Roman', 'serif'],
      },

      // [size, { lineHeight, letterSpacing }]
      fontSize: {
        'ff-display-xl': ['92px', { lineHeight: '0.94', letterSpacing: '-0.03em' }],
        'ff-display-lg': ['66px', { lineHeight: '0.96', letterSpacing: '-0.025em' }],
        'ff-display-md': ['64px', { lineHeight: '0.96', letterSpacing: '-0.025em' }],
        'ff-display-sm': ['56px', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'ff-headline': ['42px', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'ff-title': ['29px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'ff-label': ['21px', { lineHeight: '1.2', letterSpacing: '0.01em' }],

        'ff-lede': ['42px', { lineHeight: '1.14' }],
        'ff-lede-sm': ['40px', { lineHeight: '1.18' }],

        'ff-body-lg': ['28px', { lineHeight: '1.26' }],
        'ff-body-md': ['27px', { lineHeight: '1.3' }],
        'ff-body': ['23px', { lineHeight: '1.3' }],
        'ff-body-sm': ['18px', { lineHeight: '1.3' }],
        'ff-caption': ['16px', { lineHeight: '1.28' }],
        'ff-caption-xs': ['14px', { lineHeight: '1.25' }],

        'ff-eyebrow': ['22px', { lineHeight: '1.2', letterSpacing: '0.34em' }],
        'ff-meta': ['21px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'ff-data': ['41px', { lineHeight: '1.0', letterSpacing: '-0.01em' }],
      },

      spacing: {
        'ff-1': '4px',
        'ff-2': '8px',
        'ff-3': '12px',
        'ff-4': '16px',
        'ff-5': '24px',
        'ff-6': '32px',
        'ff-7': '40px',
        'ff-8': '48px',
        'ff-9': '64px',
        'ff-10': '80px',
        'ff-11': '96px',
        'ff-12': '128px',
        'ff-page': '108px',
        'ff-page-tight': '60px',
      },

      borderRadius: {
        'ff-sm': '6px',
        'ff-md': '10px',
        'ff-lg': '18px',
        'ff-pill': '999px',
      },

      borderColor: {
        ff: '#E8E8E8',
      },

      // Canvas sizes, so you can write w-ff-4x5 / h-ff-4x5.
      width: {
        'ff-4x5': '1080px',
        'ff-1x1': '1080px',
        'ff-9x16': '1080px',
        'ff-16x9': '1920px',
        'ff-cover': '1584px',
      },
      height: {
        'ff-4x5': '1350px',
        'ff-1x1': '1080px',
        'ff-9x16': '1920px',
        'ff-16x9': '1080px',
        'ff-cover': '396px',
      },

      transitionTimingFunction: {
        'ff-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ff-in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: {
        'ff-fast': '160ms',
        'ff-base': '280ms',
        'ff-slow': '520ms',
      },
    },
  },
};
