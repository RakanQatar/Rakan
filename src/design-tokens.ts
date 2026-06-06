export const tokens = {
  colors: {
    maroon:         '#8A1538',
    maroonDark:     '#6b1029',
    maroonLight:    '#a91c44',
    pearl:          '#F4F1EA',
    pearlLight:     '#FAF8F3',
    gold:           '#C9A86A',
    goldLight:      '#e0c48a',
    textPrimary:    '#1C1C1C',
    textSecondary:  '#5A5A5A',
    white:          '#FFFFFF',
    border:         'rgba(138, 21, 56, 0.10)',
    borderLight:    'rgba(28, 28, 28, 0.08)',
  },
  radius: {
    sm:   '8px',
    md:   '16px',
    lg:   '24px',
    xl:   '32px',
    full: '9999px',
  },
  shadows: {
    card:       '0 4px 24px rgba(138,21,56,0.07)',
    cardHover:  '0 8px 40px rgba(138,21,56,0.14)',
    button:     '0 4px 16px rgba(138,21,56,0.30)',
    nav:        '0 2px 20px rgba(28,28,28,0.06)',
  },
  spacing: {
    sectionY:     '5rem',
    containerMax: '1200px',
    containerPx:  '1.5rem',
  },
} as const;
