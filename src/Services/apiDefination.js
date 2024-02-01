const ApiDefination = {
  searchProperty: {
    url: '/dropdown-search?keyword=:keyword',
    method: 'GET',
    data: {},
  },
  getPropertyList: {
    url: '/property-search?city=:city&state=:state&zip=:zip',
    method: 'GET',
    data: {},
  },
}
export default ApiDefination
