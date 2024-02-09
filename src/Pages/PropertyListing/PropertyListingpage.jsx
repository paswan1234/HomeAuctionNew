/* eslint-disable no-nested-ternary */
import { useCallback, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import LoaderComponent from '@auction/Components/Loader/LoaderComponent'
import Pagination from '@auction/Components/Pagination'
import PropertyCard from '@auction/Components/PropertyCard'
import RecordNotFound from '@auction/Components/RecordNotFound'
import { capitalizeFirstLetter } from '@auction/Helpers'
import useCustomToast from '@auction/Hooks/useCustomToast'
import Footer from '@auction/Layout/Footer'
import TopHeader from '@auction/Layout/Header'
import mainApiService from '@auction/Services/apiService'

import FilterSection from './FilterSection'

function PropertyListingpage() {
  const {
    property_city: city,
    property_state: state,
    property_zip: zip,
  } = useParams()
  const { errorDispatch } = useCustomToast()

  const [propertyList, setPropertyList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalPageCount, setTotalPageCount] = useState(0)
  const [forcePage, setForcePage] = useState(0)
  const [pageNo, setPageNo] = useState(1)
  const [selectedListName, setSelectedListName] = useState(['Auction'])
  const [propertyName, setPropertyName] = useState('')
  const [selectedPropertyName, setSelectedPropertyName] = useState([])
  const [maxBaths, setMaxBaths] = useState(0)
  const [maxBeds, setMaxBeds] = useState(0)
  const [minArea, setMinArea] = useState('')
  const [maxArea, setMaxArea] = useState('')
  const [update, setUpdate] = useState(0)

  const getPropertyList = useCallback(
    async (
      property,
      listType = [],
      propertyType = [],
      baths = 0,
      beds = 0,
      minLiveArea = '',
      maxLiveArea = ''
    ) => {
      const payload = {
        city,
        state,
        zip,
        PageNumber: pageNo,
        PageSize: 9,
        PropertyType: property,
        PropertySubType: propertyType.join(','),
        DistressStatus: listType.join(','),
        MaxBath: baths || '',
        MaxBed: beds || '',
        MinLivingArea: minLiveArea,
        MaxLivingArea: maxLiveArea,
        update,
      }
      setIsLoading(true)
      try {
        const result = await mainApiService('getPropertyList', payload)
        if (result?.data?.Data?.Records?.length) {
          setPropertyList(result.data.Data.Records)
          setTotalPageCount(result.data.Data.RecordCount)
          setIsLoading(false)
        } else {
          setPropertyList([])
          setTotalPageCount(0)
          setIsLoading(false)
        }
      } catch (err) {
        errorDispatch(err)
        setIsLoading(false)
      }
    },
    [city, errorDispatch, pageNo, state, zip, update]
  )

  useEffect(() => {
    getPropertyList(
      propertyName,
      selectedListName,
      selectedPropertyName,
      maxBaths,
      maxBeds,
      minArea,
      maxArea
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo, getPropertyList, update])

  const handleResetFilter = () => {
    setPageNo(1)
    setForcePage(0)
    setSelectedListName(['Auction'])
    setSelectedPropertyName([])
    setPropertyName('')
    setMaxBaths(0)
    setMaxBeds(0)
    setMinArea('')
    setMaxArea('')
    setUpdate(0)
  }

  return (
    <div>
      <TopHeader />
      <section className="card-listing py-5">
        <Container fluid>
          <Row>
            <Col lg={4} xl={3}>
              <FilterSection
                selectedListName={selectedListName}
                selectedPropertyName={selectedPropertyName}
                propertyNamed={propertyName}
                setPropertyName={setPropertyName}
                maxBaths={maxBaths}
                maxBeds={maxBeds}
                minArea={minArea}
                maxArea={maxArea}
                setSelectedListName={setSelectedListName}
                setSelectedPropertyName={setSelectedPropertyName}
                setMaxBaths={setMaxBaths}
                setMaxBeds={setMaxBeds}
                setMinArea={setMinArea}
                setMaxArea={setMaxArea}
                setUpdate={setUpdate}
                handleResetFilter={handleResetFilter}
              />
            </Col>
            <Col lg={8} xl={9}>
              {isLoading ? (
                <LoaderComponent
                  color="col4"
                  className="d-flex justify-content-center align-items-center new-class"
                />
              ) : propertyList?.length ? (
                <>
                  <div className="titleSection mt-4 mt-lg-0">
                    <h2 className="text-col1 fs-24 fw500">
                      Foreclosures properties in {capitalizeFirstLetter(city)},{' '}
                      {state}
                    </h2>
                    <p className="text-col1 fs-16 fw500">
                      Showing 1-{propertyList?.length} properties of{' '}
                      {propertyList?.length}
                    </p>
                  </div>
                  <Row>
                    {propertyList?.map((list) => (
                      <Col key={list.PMXPropertyId} md={4}>
                        <PropertyCard propertyData={list} />
                      </Col>
                    ))}
                  </Row>
                  {totalPageCount > 9 && (
                    <Pagination
                      totalPageCount={Math.ceil(totalPageCount / 9)}
                      forcePage={forcePage}
                      handlePageClick={(event) => {
                        setPageNo(event.selected + 1)
                        setForcePage(event.selected)
                        setUpdate((prev) => prev + 1)
                      }}
                    />
                  )}
                </>
              ) : (
                <RecordNotFound />
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  )
}
export default PropertyListingpage
