import { compose } from 'ramda'

import { withRouter } from './withRouter'

// Router must be always last
export const withProviders = compose(withRouter)
