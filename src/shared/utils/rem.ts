export const rem = (value: string | number): string => {
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return `${value / 16}rem`
  }

  if (typeof value === 'string') {
    if (value.includes(' ')) {
      return value
        .split(' ')
        .map((val) => rem(val))
        .join(' ')
    }

    if (value.includes('px')) {
      if (!Number.isNaN(Number(value.replace('px', '')))) {
        return `${Number(value.replace('px', '')) / 16}rem`
      }
    }

    if (value.includes('rem')) {
      if (!Number.isNaN(Number(value.replace('rem', '')))) {
        return value
      }
    }

    if (value.includes('em')) {
      if (!Number.isNaN(Number(value.replace('em', '')))) {
        return `${Number(value.replace('em', ''))}rem`
      }
    }

    if (!Number.isNaN(Number(value))) {
      return `${Number(value) / 16}rem`
    }
  }

  throw new Error(`${JSON.stringify(value)} cannot be converted to rem`)
}
