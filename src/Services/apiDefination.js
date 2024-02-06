const ApiDefination = {
  searchProperty: {
    url: '/dropdown-search?keyword=:keyword',
    method: 'GET',
    data: {},
  },
  getPropertyList: {
    url: '/property-search?city=:city&state=:state&zip=:zip&PageNumber=:PageNumber&PageSize=:PageSize',
    method: 'GET',
    data: {},
  },
  enquireProperty: {
    url: '/enquiry',
    method: 'POST',
    data: {
      fullName: '',
      phone: '',
      email: '',
      description: '',
      notification: false,
    },
  },
}
export default ApiDefination
