import {
  createHistoryRouter,
  createRouterControls,
  redirect
} from 'atomic-router'
import { createBrowserHistory } from 'history'

import { DepartmentID } from '@/shared/api'

import { routes, routesConfig } from './routes'

export const controls = createRouterControls()

export const router = createHistoryRouter({
  routes: routesConfig,
  notFoundRoute: routes.notFound.route,
  controls
})

redirect<{}, { department: DepartmentID }>({
  clock: routes.index.route.opened,
  route: routes.department.route,
  params: { department: 'all' },
  replace: true
})

const history = createBrowserHistory({ window })

router.setHistory(history)
