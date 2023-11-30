import type { DEPARTMENT } from '@/shared/constants'

export type Department = {
  id: (typeof DEPARTMENT.IDS)[number]
  label: (typeof DEPARTMENT.LABELS)[number]
}
