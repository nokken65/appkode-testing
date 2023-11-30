import { ReactNode } from 'react'
import { RouterProvider } from 'atomic-router-react'

import { router } from '@/shared/router'

export const withRouter = (children: () => ReactNode) => () => (
  <RouterProvider router={router}>{children()}</RouterProvider>
)
