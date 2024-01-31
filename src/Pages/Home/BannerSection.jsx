import { Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import Buttons from '@auction/Components/Buttons'

import './Home.scss'

function BannerSection() {
  return (
    <section className="bannerSection">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={8} sm={12} xs={12}>
            <div className="bannerSectionText">
              <h1 className="text-white fs-48 fw700 line-initial">
                Find Your Perfect Foreclosure Home
              </h1>
              <p className="text-white fs-32 line-initial mb-0 fw400">
                The Right Location, The Right Price!
              </p>
              <div className="searchBox posRel">
                <div className="dropdownBlock h-100">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Foreclosure
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="inputBox d-flex align-items-center">
                  <div className="form-group mb-0 w-100 position-relative">
                    <Form.Control
                      required
                      type="email"
                      placeholder="Address, city, or ZIP"
                      className="topSearch"
                    />
                    <div id="searchResults" className="search-results" />
                  </div>
                </div>
                <div className="searchBttn searchBttn2 greenBtnBanner ms-md-auto">
                  <Buttons
                    text="Search"
                    className="greenBtn2 text-white fw700 transition d-flex align-tems-center"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default BannerSection
