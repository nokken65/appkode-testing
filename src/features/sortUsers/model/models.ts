import { SORT } from '@/shared/constants'

export type Sort = (typeof SORT.IDS)[number]

export type SortUsersFormFieldValues = { sort: Sort }
