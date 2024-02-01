import { Col, Container, Row } from 'react-bootstrap'
import PropertyCard from '@auction/Components/PropertyCard'

export default function PropertyList({ propertyList }) {
  return (
    <section className="card-listing py-5">
      <Container>
        <div className="titleSection">
          <h2 className="text-col1 fs-24 fw500">
            Foreclosures properties in Jersey City, New Jersey
          </h2>
          <p className="text-col1 fs-16 fw500">Showing 1-25 properties of 48</p>
        </div>
        <Row>
          {propertyList?.map((list) => (
            <Col key={list.PMXPropertyId} md={4}>
              <PropertyCard />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
