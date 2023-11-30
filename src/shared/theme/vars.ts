import { createGlobalThemeContract } from '@vanilla-extract/css'

export const vars = createGlobalThemeContract(
  {
    radius: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null
    },
    spacing: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null
    },
    breakpoints: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null
    },
    fontFamily: null,
    colors: {}
  },
  (_value, path) => `${path.map(toSnakeCase).join('')}`
)

function toSnakeCase(s: string, i: number, arr: string[]) {
  return i < arr.length ? `${s}-` : s
}
