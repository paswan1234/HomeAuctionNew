import { randomString } from '@auction/Helpers'

import { DashboardPage } from '@auction/Pages/Home'
import PropertyDetails from '@auction/Pages/PropertyDetails'
import PropertyListingpage from '@auction/Pages/PropertyListing'
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
  {
    id: randomString(),
    path: ROUTES.propertyDetails.base,
    component: PropertyDetails,
  },
]

export default AUCTION_ROUTES
