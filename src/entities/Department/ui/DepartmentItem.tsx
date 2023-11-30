import { forwardRef } from 'react'
import { Link } from 'atomic-router-react'

import { routes } from '@/shared/router'

import { Department } from '..'
import { item } from './DepartmentItem.css'

type DepartmentItemProps = Department

export const DepartmentItem = forwardRef<
  HTMLAnchorElement,
  DepartmentItemProps
>(({ id, label }, ref) => {
  return (
    <Link
      ref={ref}
      to={routes.department.route}
      params={{ department: id }}
      className={item}
    >
      {label}
    </Link>
  )
})
