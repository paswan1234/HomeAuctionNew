const ApiDefination = {
  searchProperty: {
    url: '/dropdown-search?keyword=:keyword',
    method: 'GET',
    data: {},
  },
  getPropertyList: {
    url: '/property-search?city=:city&state=:state&zip=:zip&PageNumber=:PageNumber&PageSize=:PageSize&PropertyType=:PropertyType&PropertySubType=:PropertySubType&MaxBed=:MaxBed&MaxBath=:MaxBath&MinLivingArea=:MinLivingArea&MaxLivingArea=:MaxLivingArea&DistressStatus=:DistressStatus',
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
