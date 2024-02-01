import { randomString } from '@auction/Helpers'

import { DashboardPage } from '@auction/Pages/Home'
import PropertyListingpage from '@auction/Pages/PropertyListing/PropertyListingpage'
import ROUTES from '@auction/Routes/routes'

const AUCTION_ROUTES = [
  {
    id: randomString(),
    path: ROUTES.home,
    component: DashboardPage,
  },
  {
    id: randomString(),
    path: ROUTES.propertyList.propertyListing,
    component: PropertyListingpage,
  },
]

export default AUCTION_ROUTES
