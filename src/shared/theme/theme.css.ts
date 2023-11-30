import { rem } from '@/shared/utils'

import { vars } from './vars'
import { createGlobalTheme } from '@vanilla-extract/css'

createGlobalTheme(':root', vars, {
  fontFamily:
    'Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px'
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(10),
    xl: rem(12)
  },
  spacing: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(10),
    xl: rem(12)
  },
  colors: {}
})
