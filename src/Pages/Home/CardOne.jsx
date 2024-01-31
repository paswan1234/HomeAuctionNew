import { Col, Container, Row } from 'react-bootstrap'
import Image from '@auction/Components/Image'

import CardoneImg from '@auction/assets/images/pro1.png'
import CardtwoImg from '@auction/assets/images/pro2.png'
import CardthreeImg from '@auction/assets/images/pro3.png'

import './Home.scss'

function CardOne() {
  return (
    <section className="card-one py-5">
      <Container>
        <Row>
          <Col lg={4} md={4} sm={6}>
            <div className="gridBlock mb-4 mb-md-0">
              <h2 className="text-col1 fs-24 fw600 mb-3">Pre-Foreclosures</h2>
              <div className="card-one-img">
                <Image src={CardoneImg} alt="Services" className="w-100" />
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={6}>
            <div className="gridBlock mb-4 mb-md-0">
              <h2 className="text-col1 fs-24 fw600 mb-3">Foreclosures</h2>
              <div className="card-one-img">
                <Image src={CardtwoImg} alt="Services" className="w-100" />
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={6}>
            <div className="gridBlock">
              <h2 className="text-col1 fs-24 fw600 mb-3">REO Bank Owned</h2>
              <div className="card-one-img">
                <Image src={CardthreeImg} alt="Services" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default CardOne
