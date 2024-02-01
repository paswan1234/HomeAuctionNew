import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import TopHeader from '@auction/Layout/Header'
import mainApiService from '@auction/Services/apiService'

import PropertyList from './PropertyList'

function PropertyListingpage() {
  const {
    property_city: city,
    property_state: state,
    property_zip: zip,
  } = useParams()

  const [propertyList, setPropertyList] = useState([])

  useEffect(() => {
    const payload = {
      city,
      state,
      zip,
    }
    ;(async () => {
      try {
        const result = await mainApiService('getPropertyList', payload)
        if (result?.status === 200) {
          setPropertyList(result.data.Data.Records)
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    })()
  }, [city, state, zip])

  return (
    <div>
      {/* start writing your code inside below component */}
      <TopHeader />
      <PropertyList propertyList={propertyList} />
    </div>
  )
}
export default PropertyListingpage
