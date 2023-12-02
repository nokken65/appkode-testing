import { rem } from '@/shared/utils'

import { style } from '@vanilla-extract/css'

export const input = style({
  display: 'none'
})

export const wrapper = style({
  display: 'inline-block',
  cursor: 'pointer',
  position: 'relative',
  paddingLeft: rem(25),
  marginRight: 0,
  lineHeight: rem(20),
  userSelect: 'none',

  selectors: {
    '&:before': {
      content: '',
      display: 'inline-block',
      width: rem(20),
      height: rem(20),
      position: 'absolute',
      left: rem(0),
      borderRadius: '50%',
      border: '2px solid #6534FF'
    }
  }
})

// /* Checked */
// .form_radio input[type=radio]:checked + label:before {
// 	background: url(/img/radio-2.png) 0 0 no-repeat;
// }

// /* Hover */
// .form_radio label:hover:before {
// 	filter: brightness(120%);
// }

// /* Disabled */
// .form_radio input[type=radio]:disabled + label:before {
// 	filter: grayscale(100%);
// }
