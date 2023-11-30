import { style } from '@vanilla-extract/css'

export const indicatorClass = style({
  position: 'absolute',
  display: 'block',
  top: 0,
  bottom: 0,
  borderBottom: '2px solid blue',
  backgroundColor: '#cccccc30',
  transition: 'all 0.2s ease-in-out'
})
