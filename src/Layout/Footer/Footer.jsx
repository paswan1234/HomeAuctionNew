import { Col, Container, Row } from 'react-bootstrap'
import Image from '@auction/Components/Image'

import WheelIcon from '@auction/assets/images/svg/cil_disabled.svg'
import FbIcon from '@auction/assets/images/svg/fb.svg'
import HomeIcon from '@auction/assets/images/svg/home.svg'
import TwIcon from '@auction/assets/images/svg/twtr.svg'
import YoIcon from '@auction/assets/images/svg/youtbe.svg'

import './footer.scss'

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <Container>
          <Row>
            <Col sm={6} md={4}>
              <div className="footer-list">
                <h3 className="fw700 fs-18 text-col3">Discover</h3>
                <ul className="m-0 p-0 w-100">
                  <li>Home</li>
                  <li>Pre-Foreclosures</li>
                  <li>Bank Owned</li>
                  <li>Resources</li>
                </ul>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="footer-list">
                <h3 className="fw700 fs-18 text-col3">Company</h3>
                <ul className="m-0 p-0 w-100">
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Site Map</li>
                  <li>Housing FAQ</li>
                  <li>Contact</li>
                  <li>Disclaimer</li>
                </ul>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className="footer-list">
                <h3 className="fw700 fs-18 text-col3">Join Us On</h3>
                <ul className="m-0 p-0 w-100 d-flex align-content-center">
                  <li className="me-4">
                    <span className="cursor-pointer">
                      <Image
                        src={FbIcon}
                        width="25"
                        name="Facebook"
                        className="img-fuild"
                      />
                    </span>
                  </li>
                  <li className="me-4">
                    <span className="cursor-pointer">
                      <Image
                        src={TwIcon}
                        width="25"
                        name="Facebook"
                        className="img-fuild"
                      />
                    </span>
                  </li>
                  <li>
                    <span className="cursor-pointer">
                      <Image
                        src={YoIcon}
                        width="25"
                        name="Facebook"
                        className="img-fuild"
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="footer-bottom">
            <Row>
              <Col md={6} className="pl-0">
                <p className="fs-14 text-col3 fw400 mb-0">
                  © 2023 Home Auction Deals, Inc. All rights reserved
                </p>
              </Col>
              <Col md={6} className="pr-0">
                <ul className="m-0 p-0 w-100 d-flex justify-content-end">
                  <li className="me-4">
                    <span className="cursor-pointer">
                      <Image
                        src={HomeIcon}
                        width="30"
                        name="Facebook"
                        className="img-fuild"
                      />
                    </span>
                  </li>
                  <li>
                    <span className="cursor-pointer">
                      <Image
                        src={WheelIcon}
                        width="30"
                        name="Facebook"
                        className="img-fuild"
                      />
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Footer
