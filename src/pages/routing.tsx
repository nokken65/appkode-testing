import { createRoutesView } from 'atomic-router-react'

import { routes } from '@/shared/router'

import { Page } from './Department/page'

export const Routing = createRoutesView({
  routes: [
    { route: routes.department.route, view: Page },
    { route: routes.notFound.route, view: () => <div>{':(((('}</div> }
  ],
  otherwise() {
    return <div>Page not found!</div>
  }
})
