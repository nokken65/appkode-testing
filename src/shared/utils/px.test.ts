import { px } from './px'

describe('units-converters/px', () => {
  test('converts rem string to px number', () => {
    expect(px('1rem')).toBe('16px')
    expect(px('1.25rem')).toBe('20px')
  })

  test('converts em string to px number', () => {
    expect(px('1em')).toBe('16px')
    expect(px('1.25em')).toBe('20px')
  })

  test('converts px string to px number', () => {
    expect(px('12px')).toBe('12px')
  })

  test('returns number if function received number or stringify number as an argument', () => {
    expect(px(16)).toBe('16px')
    expect(px('16')).toBe('16px')
  })

  test('returns Error if value cannot be converted', () => {
    expect(() => px('12p')).toThrowError(
      new Error(`"12p" cannot be converted to px`)
    )
    expect(() => px('12re')).toThrowError(
      new Error(`"12re" cannot be converted to px`)
    )
    expect(() => px('12%')).toThrowError(
      new Error(`"12%" cannot be converted to px`)
    )
    expect(() => px('12vh')).toThrowError(
      new Error(`"12vh" cannot be converted to px`)
    )
    // @ts-ignore
    expect(() => px({})).toThrowError(new Error(`{} cannot be converted to px`))
    // @ts-ignore
    expect(() => px([])).toThrowError(new Error(`[] cannot be converted to px`))
    // @ts-ignore
    expect(() => px(null)).toThrowError(
      new Error(`null cannot be converted to px`)
    )
    // @ts-ignore
    expect(() => px(undefined)).toThrowError(
      new Error(`undefined cannot be converted to px`)
    )
  })

  test('converts string with multiple values', () => {
    expect(px('1rem 4px 1.25em')).toBe('16px 4px 20px')
  })
})
