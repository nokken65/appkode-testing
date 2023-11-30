import { createEffect, createEvent, createStore, sample } from 'effector'

import { DEPARTMENT } from '@/shared/constants'
import { router } from '@/shared/router'

const setPositionFx = createEffect<
  [number, HTMLAnchorElement[]],
  [number, number]
>(([activeIndex, el]) => {
  const currentTab = el[activeIndex]
  return [currentTab?.offsetLeft ?? 0, currentTab?.clientWidth ?? 0]
})

const settedTabElements = createEvent<HTMLAnchorElement[]>()

const $activeIndex = createStore(
  DEPARTMENT.IDS.findIndex((v) => router.$path.getState().split('/')[1] === v)
)

const $tabElements = createStore<HTMLAnchorElement[]>([])

const $left = createStore(0)
const $width = createStore(0)

$tabElements.on(settedTabElements, (_, elements) => elements)
$left.on(setPositionFx.doneData, (_, [left, _width]) => left)
$width.on(setPositionFx.doneData, (_, [_left, width]) => width)

sample({
  clock: settedTabElements,
  source: $activeIndex,
  fn: (idx, els) => [idx, els] as const,
  target: setPositionFx
})

sample({
  clock: $activeIndex,
  source: $tabElements,
  fn: (els, idx) => [idx, els] as const,
  target: setPositionFx
})

sample({
  clock: router.$path,
  fn: (path) => DEPARTMENT.IDS.findIndex((v) => path.split('/')[1] === v),
  target: $activeIndex
})

export const indicator = {
  $left,
  $width,
  settedTabElements
}
