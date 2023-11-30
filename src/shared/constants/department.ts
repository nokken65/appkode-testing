import { DepartmentID, DepartmentLabel } from '../api/models'
import { UnionToTuple } from '../types/unionToTuple'

const IDS: Readonly<UnionToTuple<DepartmentID>> = [
  'all',
  'android',
  'ios',
  'design',
  'management',
  'qa',
  'back_office',
  'frontend',
  'hr',
  'pr',
  'backend',
  'support',
  'analytics'
]

const LABELS: Readonly<UnionToTuple<DepartmentLabel>> = [
  'Все',
  'Android',
  'IOS',
  'Дизайн',
  'Менеджмент',
  'QA',
  'Бэк-офис',
  'Frontend',
  'HR',
  'PR',
  'Backend',
  'Техподдержка',
  'Аналитика'
]

export const DEPARTMENT = {
  IDS,
  LABELS
}
