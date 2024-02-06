import { useCallback, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import LoaderComponent from '@auction/Components/Loader/LoaderComponent'
import Pagination from '@auction/Components/Pagination'
import PropertyCard from '@auction/Components/PropertyCard'
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
  const [selectedListName, setSelectedListName] = useState([])
  const [selectedPropertyName, setSelectedPropertyName] = useState([])
  const [maxBaths, setMaxBaths] = useState(0)
  const [maxBeds, setMaxBeds] = useState(0)

  const getPropertyList = useCallback(
    async (listType = [], propertyType = [], baths = 0, beds = 0) => {
      const payload = {
        city,
        state,
        zip,
        PageNumber: pageNo,
        PageSize: 9,
        PropertyType: propertyType.join(','),
        PropertySubType: listType.join(','),
        MaxBath: baths || '',
        MaxBed: beds || '',
      }
      try {
        const result = await mainApiService('getPropertyList', payload)
        if (result?.status === 200) {
          setPropertyList(result.data.Data.Records)
          setTotalPageCount(result.data.Data.RecordCount)
          setIsLoading(false)
        }
      } catch (err) {
        errorDispatch(err)
        setIsLoading(false)
      }
    },
    [city, errorDispatch, pageNo, state, zip]
  )

  useEffect(() => {
    getPropertyList(selectedListName, selectedPropertyName, maxBaths, maxBeds)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo, getPropertyList])

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
                maxBaths={maxBaths}
                maxBeds={maxBeds}
                setSelectedListName={setSelectedListName}
                setSelectedPropertyName={setSelectedPropertyName}
                setMaxBaths={setMaxBaths}
                setMaxBeds={setMaxBeds}
                getPropertyList={getPropertyList}
              />
            </Col>
            <Col lg={8} xl={9}>
              {isLoading ? (
                <LoaderComponent
                  color="col4"
                  className="d-flex justify-content-center align-items-center new-class"
                />
              ) : (
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
                  <Pagination
                    totalPageCount={Math.ceil(totalPageCount / 9)}
                    forcePage={forcePage}
                    handlePageClick={(event) => {
                      setPageNo(event.selected + 1)
                      setForcePage(event.selected)
                    }}
                  />
                </>
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
