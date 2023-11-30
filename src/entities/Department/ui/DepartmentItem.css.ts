import { style } from '@vanilla-extract/css'

export const item = style({
  display: 'flex',
  padding: '0.5rem 12px',

  color: '#97979B',
  textDecoration: 'none',

  whiteSpace: 'nowrap',
  fontFamily: 'Inter',

  fontSize: '15px',
  fontWeight: 500
})

export const active = style({
  color: '#000000',
  backgroundColor: '#cccccc40',
  borderBottom: '2px solid #6534FF'
})
