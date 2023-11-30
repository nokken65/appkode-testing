import { createEvent, createStore } from 'effector'

import { Sort } from './models'

const settedSort = createEvent<Sort>()

const $sort = createStore<Sort>('byAlphabet')

$sort.on(settedSort, (_, sort) => sort)

export const sortUsers = { $sort, settedSort }
