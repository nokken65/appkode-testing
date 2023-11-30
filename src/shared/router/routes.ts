import { createRoute } from 'atomic-router'
import type { DepartmentID } from '@/shared/api'

export const routes = {
  index: { path: '/', route: createRoute() },
  notFound: { path: '/404', route: createRoute() },
  department: {
    path: '/:department',
    route: createRoute<{ department: DepartmentID }>()
  }
}

export const routesConfig = Object.values(routes)
