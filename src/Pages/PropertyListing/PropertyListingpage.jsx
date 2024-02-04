import { useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Pagination from '@auction/Components/Pagination'
import PropertyCard from '@auction/Components/PropertyCard'
import TopHeader from '@auction/Layout/Header'
import mainApiService from '@auction/Services/apiService'

import FilterSection from './FilterSection'

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
      <section className="card-listing py-5">
        <Container fluid>
          <Row>
            <Col lg={4} xl={3}>
              <FilterSection />
            </Col>
            <Col lg={8} xl={9}>
              <div className="titleSection mt-4 mt-lg-0">
                <h2 className="text-col1 fs-24 fw500">
                  Foreclosures properties in Jersey City, New Jersey
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
              <Pagination totalPageCount={Math.ceil(100 / 10)} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
export default PropertyListingpage
