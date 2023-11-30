import { z } from 'zod'

import {
  departmentIdsSchema,
  departmentLabelsSchema,
  searchSchema,
  userSchema
} from './schemas'

export type DepartmentID = z.infer<typeof departmentIdsSchema>
export type DepartmentLabel = z.infer<typeof departmentLabelsSchema>

export type Department = {
  id: DepartmentID
  label: DepartmentLabel
}

export type SearchParams = z.infer<typeof searchSchema>

export type User = z.infer<typeof userSchema>
