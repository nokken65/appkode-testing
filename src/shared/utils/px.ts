export const px = (value: string | number): string => {
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return `${value}px`
  }

  if (typeof value === 'string') {
    if (value.includes(' ')) {
      return value
        .split(' ')
        .map((val) => px(val))
        .join(' ')
    }

    if (value.includes('px')) {
      if (!Number.isNaN(Number(value.replace('px', '')))) {
        return value
      }
    }

    if (value.includes('rem')) {
      if (!Number.isNaN(Number(value.replace('rem', '')))) {
        return `${Number(value.replace('rem', '')) * 16}px`
      }
    }

    if (value.includes('em')) {
      if (!Number.isNaN(Number(value.replace('em', '')))) {
        return `${Number(value.replace('em', '')) * 16}px`
      }
    }

    if (!Number.isNaN(Number(value))) {
      return `${value}px`
    }
  }

  throw new Error(`${JSON.stringify(value)} cannot be converted to px`)
}
