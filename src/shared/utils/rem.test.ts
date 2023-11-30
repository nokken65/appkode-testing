import { rem } from './rem'

describe('units-converters/rem', () => {
  test('converts rem string to rem string', () => {
    expect(rem('1rem')).toBe('1rem')
    expect(rem('1.25rem')).toBe('1.25rem')
  })

  test('converts em string to rem string', () => {
    expect(rem('1em')).toBe('1rem')
    expect(rem('1.25em')).toBe('1.25rem')
  })

  test('converts px string to rem string', () => {
    expect(rem('12px')).toBe('0.75rem')
  })

  test('returns rem string if function received number or stringify number as an argument', () => {
    expect(rem(16)).toBe('1rem')
    expect(rem('16')).toBe('1rem')
  })

  test('returns Error if value cannot be converted', () => {
    expect(() => rem('12p')).toThrowError(
      new Error(`"12p" cannot be converted to rem`)
    )
    expect(() => rem('12re')).toThrowError(
      new Error(`"12re" cannot be converted to rem`)
    )
    expect(() => rem('12%')).toThrowError(
      new Error(`"12%" cannot be converted to rem`)
    )
    expect(() => rem('12vh')).toThrowError(
      new Error(`"12vh" cannot be converted to rem`)
    )
    // @ts-ignore
    expect(() => rem({})).toThrowError(
      new Error(`{} cannot be converted to rem`)
    )
    // @ts-ignore
    expect(() => rem([])).toThrowError(
      new Error(`[] cannot be converted to rem`)
    )
    // @ts-ignore
    expect(() => rem(null)).toThrowError(
      new Error(`null cannot be converted to rem`)
    )
    // @ts-ignore
    expect(() => rem(undefined)).toThrowError(
      new Error(`undefined cannot be converted to rem`)
    )
  })

  test('converts string with multiple values', () => {
    expect(rem('1rem 4px 1.25em')).toBe('1rem 0.25rem 1.25rem')
  })
})
