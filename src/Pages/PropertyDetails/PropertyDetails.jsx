import { Col, Container, Row, Table } from 'react-bootstrap'
import Breadcrumb from '@auction/Components/Breadcrumb'
import Image from '@auction/Components/Image'
import Header from '@auction/Layout/Header'

import ProductSlider from './ProductSlider'
import QuestionDetail from './QuestionDetail'

import IconCheck from '@auction/assets/images/svg/check.svg'
import IconOne from '@auction/assets/images/svg/ico1.svg'
import IconTwo from '@auction/assets/images/svg/ico2.svg'
import IconThree from '@auction/assets/images/svg/ico3.svg'
import IconFour from '@auction/assets/images/svg/ico4.svg'

export default function PropertyDetails() {
  return (
    <>
      <Header />
      <Container>
        <div className="my-3">
          <Breadcrumb />
        </div>
        <h1 className="fw600 fs-24 text-col1 mb-4">
          Pre-foreclosure S Kimbark Ave 442 E 84th Pl, Los Angeles, CA 90003
          $157,800
        </h1>
        <Row>
          <Col md={7} lg={8}>
            <ProductSlider />
            <div className="topTitle mt-4 mb-4 pb-1">
              <Row className="align-items-start">
                <Col md={8} lg={8} xl={9}>
                  <div className="toLeftTitle">
                    <div className="d-flex flex-wrap align-items-center mb-2">
                      <div className="dot purple" />
                      <p className="mb-0 ftSze14 ftWgt500">PRE-FORECLOSURE</p>
                    </div>
                    <div className="titleLefthead mb-2">
                      <h2 className="text-col1 fs-24 fw600">
                        LOS ARROYOS DEL ESTE RESUB LOT 152
                      </h2>
                      <p className="fs-18 fw400 mb-16">
                        442 E 84th Pl, Los Angeles, CA 90003
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <ul className="m-0 p-0 list-style-none d-flex flex-wrap property-ul">
                        <li className="d-flex align-items-center fs-18 fw400 text-col5">
                          <Image
                            src={IconOne}
                            width="22"
                            name="Icon"
                            className="img-fuild"
                          />
                          <span className="fs-18 fw400 text-col1">1-3</span>{' '}
                          Beds
                        </li>
                        <li className="d-flex align-items-center ml-12 fs-18 fw400 text-col5">
                          <Image
                            src={IconTwo}
                            width="20"
                            name="Icon"
                            className="img-fuild"
                          />
                          <span className="fs-18 fw400 text-col1">2</span> Baths
                        </li>
                        <li className="d-flex align-items-center ml-12 fs-18 fw400 text-col5">
                          <Image
                            src={IconThree}
                            width="18"
                            name="Icon"
                            className="img-fuild"
                          />
                          <span className="fs-18 fw400 text-col1">
                            1,210 Sqft
                          </span>
                        </li>
                        <li className="d-flex align-items-center ml-12 fs-18 fw400 text-col5">
                          <Image
                            src={IconFour}
                            width="18"
                            name="Icon"
                            className="img-fuild"
                          />
                          <span className="fs-18 fw400 text-col1">
                            6,766 Lot Size
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={4} lg={4} xl={3} class="ms-auto text-end">
                  <div className="d-flex flex-wrap mt-3 mt-md-0 align-items-bottom text-nowrap">
                    <h3 className="fs-32 fw700 mb-0 me-2">$112,000</h3>
                    <div className="d-flex align-items-center position-relative min-width70">
                      <p className="fs-14 fw500 text-col5 mb-0">Est. Value</p>
                    </div>
                  </div>
                  <div className="dealTag fs-20 fw700 mt-3">
                    <Image
                      src={IconCheck}
                      width="22"
                      name="Icon"
                      className="img-fuild"
                    />
                    Good Deal
                  </div>
                </Col>
              </Row>
            </div>
            <div className="forecast-table mb-5">
              <h2 className="fs-20 text-col1 fw600 mb-2">
                Foreclosure & Debt Information
              </h2>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>
                      <span className="fw600">Foreclosure Balance</span>
                    </td>
                    <td>$139,114</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw600">Loan Amount</span>
                    </td>
                    <td>$155,892</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw600">Loan Date</span>
                    </td>
                    <td>24 March 2009</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw600">Auction Date</span>
                    </td>
                    <td>1 March 2022, 10.15 AM</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw600">Auction Address</span>
                    </td>
                    <td>110 WEST CONGRESS ST TUCSON</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw600">Forclosure Doc. Number</span>
                    </td>
                    <td>3626744</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw600">Forclosure Book Number</span>
                    </td>
                    <td>-</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col md={5} lg={4}>
            <QuestionDetail />
          </Col>
        </Row>
      </Container>
    </>
  )
}
