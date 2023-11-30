import { reflect } from '@effector/reflect'

import { indicator } from '../model/indicator'
import { indicatorClass } from './DepartmentIndicator.css'

type DepartmentIndicatorProps = {
  left: number
  width: number
}

const _DepartmentIndicator = ({ left, width }: DepartmentIndicatorProps) => {
  return (
    <span
      className={indicatorClass}
      style={{ left, width }}
    />
  )
}

export const DepartmentIndicator = reflect({
  view: _DepartmentIndicator,
  bind: {
    left: indicator.$left,
    width: indicator.$width
  }
})
