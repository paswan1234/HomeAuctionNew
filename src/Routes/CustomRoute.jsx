import { Route, Routes } from 'react-router-dom'

import AUCTION_ROUTES from './auctionRoutes'

const ALL_ROUTES = [...AUCTION_ROUTES]

function CustomRoute() {
  return (
    <Routes>
      {ALL_ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  )
}

export default CustomRoute
