import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'

function ForeclosureSection() {
  return (
    <div className="foreclosure-section">
      <Container>
        <h2 className="text-col1 fs-24 fw500 pb-2">
          Foreclosure Homes by Regions
        </h2>
        <div className="listing-block my-4">
          <Tabs defaultActiveKey="east-region" id="Region" className="mb-3">
            <Tab eventKey="east-region" title="East Region">
              <Row>
                <Col md={3} xs={6}>
                  <ul className="m-0 p-0 w-100 list-style-none region-tab-ul">
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">Maine</h3>
                    </li>
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">New York</h3>
                    </li>
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">Delaware</h3>
                    </li>
                  </ul>
                </Col>
                <Col md={3} xs={6}>
                  <ul className="m-0 p-0 w-100 list-style-none region-tab-ul">
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">
                        New Hampshire
                      </h3>
                    </li>
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">
                        Rhode Island
                      </h3>
                    </li>
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">Delaware</h3>
                    </li>
                  </ul>
                </Col>
                <Col md={3} xs={6}>
                  <ul className="m-0 p-0 w-100 list-style-none region-tab-ul">
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">Vermont</h3>
                    </li>
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">
                        Connecticut
                      </h3>
                    </li>
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">New Jersey</h3>
                    </li>
                  </ul>
                </Col>
                <Col md={3} xs={6}>
                  <ul className="m-0 p-0 w-100 list-style-none region-tab-ul">
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">
                        Massachusetts
                      </h3>
                    </li>
                    <li>
                      <h3 className="fs-18 fw500 mb-0 text-col1">
                        Washington DC
                      </h3>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="midwest-region" title="Midwest Region">
              Midwest Region
            </Tab>
            <Tab eventKey="south-region" title="South Region">
              South Region
            </Tab>
            <Tab eventKey="southwest-region" title="Southwest Region">
              Southwest Region
            </Tab>
            <Tab eventKey="west-region" title="West Region">
              West Region
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  )
}
export default ForeclosureSection
