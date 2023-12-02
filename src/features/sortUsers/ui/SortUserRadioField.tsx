import React from 'react'
import type { ReadonlySignal } from '@preact/signals-react'

import { Sort } from '../model/models'
import { input, wrapper } from './SortUserRadioField.css'

type SortUserRadioFieldProps = {
  name: string
  label?: string
  value: Sort
  checked: boolean
  error: ReadonlySignal<string>
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur: React.FocusEventHandler<HTMLInputElement>
}

const _SortUserRadioField = React.forwardRef<
  HTMLInputElement,
  SortUserRadioFieldProps
>(({ label, error, ...props }, ref) => {
  const { value: id } = props
  return (
    <div className={wrapper}>
      <input
        className={input}
        {...props}
        ref={ref}
        id={id}
        type="radio"
        aria-invalid={!!error.value}
        aria-errormessage={`${id}-error`}
      />
      {label && <label htmlFor={id}>{label}</label>}
      {error.value && <div id={`${id}-error`}>{error}</div>}
    </div>
  )
})

export const SortUserRadioField = React.memo(_SortUserRadioField)
