import { useLayoutEffect, useRef } from 'react'
import { useUnit } from 'effector-react'

import { DEPARTMENT } from '@/shared/constants'

import { indicator } from '../model/indicator'
import { DepartmentIndicator } from './DepartmentIndicator'
import { DepartmentItem } from './DepartmentItem'
import { list, nav } from './DepartmentNav.css'

export const DepartmentNav = () => {
  const settedTabElements = useUnit(indicator.settedTabElements)
  const tabsRef = useRef<Array<HTMLAnchorElement>>([])

  useLayoutEffect(() => {
    settedTabElements(tabsRef.current)
  })

  return (
    <nav className={nav}>
      <ul className={list}>
        {DEPARTMENT.IDS.map((id, index) => (
          <DepartmentItem
            key={id}
            ref={(el) => {
              if (el !== null) {
                tabsRef.current[index] = el
              }
            }}
            id={id}
            label={DEPARTMENT.LABELS[index]!}
          />
        ))}
      </ul>
      <DepartmentIndicator />
    </nav>
  )
}
