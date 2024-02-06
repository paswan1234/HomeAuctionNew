import { Col, Container, Row } from 'react-bootstrap'

function PopularCity() {
  return (
    <div className="popular-section">
      <Container>
        <h2 className="text-col1 fs-24 fw500 pb-2">Popular cities</h2>
        <div className="listing-block my-4">
          <Row>
            <Col md={3} xs={6}>
              <ul className="m-0 p-0 w-100">
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">New York</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">New York</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Miami</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Florida</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Seattle</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Washington</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Austin</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Texas</p>
                </li>
              </ul>
            </Col>
            <Col md={3} xs={6}>
              <ul className="m-0 p-0 w-100">
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Phoenix</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Arizona</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">San Diego</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">California</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Boston</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Massachusetts</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">New Orleans</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Lousiana</p>
                </li>
              </ul>
            </Col>
            <Col md={3} xs={6}>
              <ul className="m-0 p-0 w-100">
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Atlanta</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Georgia</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">San Francisco</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">California</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Philadelphia</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Pennsylvania</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">San Antonio</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Texas</p>
                </li>
              </ul>
            </Col>
            <Col md={3} xs={6}>
              <ul className="m-0 p-0 w-100">
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Chicago</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Illinois</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Nashville</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Tennesse</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Dallas</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">Texas</p>
                </li>
                <li>
                  <h3 className="fs-18 fw500 mb-0 text-col1">Los Angeles</h3>
                  <p className="fs-16 fw400 mb-0 text-col5">California</p>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
export default PopularCity
