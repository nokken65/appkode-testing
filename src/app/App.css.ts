import { vars } from '@/shared/theme'
import { rem } from '@/shared/utils'

import { globalStyle, style } from '@vanilla-extract/css'

globalStyle('#app-root', {
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md
})

globalStyle('body', {
  backgroundColor: '#0f172a',
  color: '#fff',

  fontFamily: 'Inter, serif'
})

export const wrapper = style({
  padding: rem(24),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  minHeight: '100vh'
})
