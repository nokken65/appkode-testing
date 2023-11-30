import { createRoot } from 'react-dom/client'

import { createNodeAndAppendToDOM } from '../common/createNodeAndApendToDOM'
import type { CreateNodeAndAppendToDOMConfig } from '../common/createNodeAndApendToDOM'

export const createAppRoot = (props: CreateNodeAndAppendToDOMConfig) => {
  let appRootElement = document.getElementById('app-root')

  if (appRootElement === null) {
    appRootElement = createNodeAndAppendToDOM(props)
  }

  return createRoot(appRootElement)
}
