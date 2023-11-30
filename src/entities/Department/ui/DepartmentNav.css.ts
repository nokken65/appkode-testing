import { rem } from '@/shared/utils'

import { style } from '@vanilla-extract/css'

export const nav = style({
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '2.25rem',

  borderBottom: '1px solid #C3C3C6',
  overflowX: 'scroll',
  overflowY: 'hidden',
  selectors: {
    '&::-webkit-scrollbar': {
      width: '0px',
      height: '0px'
    },

    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1'
    },

    '&::-webkit-scrollbar-thumb': {
      background: 'red'
    }
  }
})

export const list = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: '0 1rem',
  margin: 0,

  flexWrap: 'nowrap'
})
