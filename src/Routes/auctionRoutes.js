import { randomString } from '@auction/Helpers'

import { DashboardPage } from '@auction/Pages/Home'
import ROUTES from '@auction/Routes/routes'

const AUCTION_ROUTES = [
  {
    id: randomString(),
    path: ROUTES.home,
    component: DashboardPage,
  },
]

export default AUCTION_ROUTES
