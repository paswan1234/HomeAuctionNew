import { Col, Container, Form, Row } from 'react-bootstrap'
import { Button } from '@auction/Components/Buttons'

import './Home.scss'

function NewsletterSection() {
  return (
    <section className="newsletter-card py-5">
      <Container>
        <div className="mapSection">
          <Row>
            <Col lg={6} />
            <Col lg={6}>
              <div className="mapRightBlock">
                <h2 className="text-col3 fs-32 fw400 mb-3">
                  Sign up for free Home Auction Deals announcements near you
                </h2>
                <div className="d-flex align-items-center inputField position-relative">
                  <div className="input-group">
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter email address"
                      className="topSearch"
                    />
                  </div>
                  <Button
                    text="Get Alerted"
                    className="getAlerted getAlertedGreen ftWgt700"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}
export default NewsletterSection
