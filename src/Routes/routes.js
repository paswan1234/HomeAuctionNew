const ROUTES = {
  home: '/',
  propertyList: {
    base: '/propertyListing',
    propertyListing:
      '/propertyListing/:property_city/:property_state/:property_zip',
  },
  propertyDetails: {
    base: '/property-details',
  },
}

export default ROUTES
