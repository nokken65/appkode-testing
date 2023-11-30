import 'reseter.css'

import { Routing } from '@/pages/routing'

import { withProviders } from './providers'

const _App = () => {
  return <Routing />
}

export const App = withProviders(_App)
