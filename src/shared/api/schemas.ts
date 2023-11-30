import { literal, object, string, union } from 'zod'

export const departmentIdsSchema = union([
  literal('all'),
  literal('android'),
  literal('ios'),
  literal('design'),
  literal('management'),
  literal('qa'),
  literal('back_office'),
  literal('frontend'),
  literal('hr'),
  literal('pr'),
  literal('backend'),
  literal('support'),
  literal('analytics')
])

export const departmentLabelsSchema = union([
  literal('Все'),
  literal('Android'),
  literal('IOS'),
  literal('Дизайн'),
  literal('Менеджмент'),
  literal('QA'),
  literal('Бэк-офис'),
  literal('Frontend'),
  literal('HR'),
  literal('PR'),
  literal('Backend'),
  literal('Техподдержка'),
  literal('Аналитика')
])

export const searchSchema = object({
  query: string().max(10, 'Too long!'),
  department: departmentIdsSchema
})

export const userSchema = object({
  id: string(),
  avatarUrl: string().url(),
  firstName: string().min(3).max(6),
  lastName: string(),
  userTag: string(),
  department: departmentIdsSchema,
  position: string(),
  birthday: string().datetime(),
  phone: string()
})
