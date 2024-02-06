import { forwardRef, useState } from 'react'

import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { capitalizeFirstLetter } from '@auction/Helpers'
import useCustomToast from '@auction/Hooks/useCustomToast'
import mainApiService from '@auction/Services/apiService'

function SearchPropertyField({ handleChange, onClear }, ref) {
  const { errorDispatch } = useCustomToast()
  const [searchData, setSearchData] = useState([])

  const handleSearch = async (query) => {
    try {
      const result = await mainApiService('searchProperty', {
        keyword: query,
      })
      if (result?.status === 200) {
        setSearchData(result?.data)
      }
    } catch (err) {
      errorDispatch(err)
    }
  }

  return (
    <AsyncTypeahead
      id="basic-example"
      ref={ref}
      onChange={handleChange}
      options={searchData}
      labelKey={(option) =>
        `${capitalizeFirstLetter(option?.property_city)}, ${
          option?.property_state
        }`
      }
      placeholder="Enter City or State"
      onSearch={(query) => handleSearch(query)}
      onInputChange={(query) => {
        if (!query && onClear) {
          onClear()
        }
      }}
      required
      maxResults={10}
    />
  )
}
export default forwardRef(SearchPropertyField)
