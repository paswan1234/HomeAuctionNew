import { Col, Container, Row, Table } from 'react-bootstrap'
import Breadcrumb from '@auction/Components/Breadcrumb'
import Button from '@auction/Components/Buttons/Button'
import Image from '@auction/Components/Image'
import Header from '@auction/Layout/Header'

import ProductSlider from './ProductSlider'
import QuestionDetail from './QuestionDetail'

import IconCheck from '@auction/assets/images/svg/check.svg'
import IconOne from '@auction/assets/images/svg/ico1.svg'
import IconTwo from '@auction/assets/images/svg/ico2.svg'
import IconThree from '@auction/assets/images/svg/ico3.svg'
import IconFour from '@auction/assets/images/svg/ico4.svg'
import QueIcon from '@auction/assets/images/svg/que.svg'

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
            <div className="forecast-table mb-4">
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
            <Row className="mb-4 pb-3">
              <Col lg={6}>
                <div className="boxbtn mb-4 mb-lg-0">
                  <h4 className="text-col4 fs-16 fw600 mb-2">TRUSTEE</h4>
                  <h4 className="fs-18 fw600 text-col1 mb-2">
                    JANEWAY LAW FIRM PC
                  </h4>
                  <div className="detailBlock mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i
                        className="fa fa-map-marker me-2 fs-24"
                        aria-hidden="true"
                      />
                      <p className="mb-0 fw400 fs-14 text-col1">
                        9800 S MERIDIAN BLVD SUITE 400, ENGLEWOOD, CO, 80112
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <i
                        className="fa fa-phone me-2 fs-18"
                        aria-hidden="true"
                      />
                      <p className="mb-0 fw400 fs-14 text-col1">303-706-9990</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <h4 className="fs-14 fw500 text-col1 mb-0 me-2">
                        Trustee File Number:
                      </h4>
                      <p className="fs-14 fw400 text-col1 mb-0">19-023417</p>
                    </div>
                  </div>
                  <div className="w-100">
                    <Button
                      text="See Trustee Info"
                      className="longBtn blueBtnLongBtn"
                    />
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="boxbtn">
                  <h4 className="text-col4 fs-16 fw600 mb-2">LENDER</h4>
                  <h4 className="fs-18 fw600 text-col1 mb-2">
                    WELLS FARGO BANK NA
                  </h4>
                  <div className="detailBlock mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i
                        className="fa fa-map-marker me-2 fs-24"
                        aria-hidden="true"
                      />
                      <p className="mb-0 fw400 fs-14 text-col1">
                        9800 S MERIDIAN BLVD SUITE 400, ENGLEWOOD, CO, 80112
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <i
                        className="fa fa-phone me-2 fs-18"
                        aria-hidden="true"
                      />
                      <p className="mb-0 fw400 fs-14 text-col1">303-706-9990</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <h4 className="fs-14 fw500 text-col1 mb-0 me-2">
                        Trustee File Number:
                      </h4>
                      <p className="fs-14 fw400 text-col1 mb-0">19-023417</p>
                    </div>
                  </div>
                  <div className="w-100">
                    <Button
                      text="See Trustee Info"
                      className="longBtn blueBtnLongBtn"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="questions mb-5">
              <div className="d-flex flex-column flex-xl-row align-items-start align-items-xl-center">
                <Image
                  src={QueIcon}
                  width="50"
                  name="Icon"
                  className="img-fuild mb-3"
                />
                <div className="ms-lg-0 ms-xl-3">
                  <h3 className="fs-18 fw600 text-col1 mb-0">
                    Questions about this property?
                  </h3>
                  <p className="fs-16 fw400 text-col1 mb-0">
                    Get connected with a Local Agent immediately
                  </p>
                </div>
                <div className="mt-3 mt-xl-0 ms-xl-auto">
                  <Button
                    text="Get Connected"
                    className="smallBtn greenBtnLongBtn fs-16 fw700"
                  />
                </div>
              </div>
            </div>
            <div className="descriptn mb-4">
              <h3 className="fs-20 fw600 text-col1 mb-3">Description</h3>
              <p className="fs-16 fw400 text-col1 mb-3">
                Colonial home built in 1900s, offers 2128 sq ft, 3 bedrooms, 2
                Full baths, situated on 18.67 acres in Saint Johnsville. Private
                well, private sewer. Barn is attached to main house. 2nd floor
                is situated as an In Law Apartment that has a kitchen, living
                room and 1 bedroom. Owner Occupants and nonprofit buyers only
                for the first 21 days. Investor offers will be reviewed starting
                day 21. Buyers will be required to sign an occupancy
                certification. Sellers will review offers after the property has
                been on the market 7 days.
              </p>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="fs-14 fw400 text-col5">Listed</th>
                    <th className="fs-14 fw400 text-col5">Built</th>
                    <th className="fs-14 fw400 text-col5">Last Sold</th>
                    <th className="fs-14 fw400 text-col5">Sale Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="fs-16 fw600 text-black">24 January 2022</th>
                    <td className="fs-16 fw600 text-col1">1994</td>
                    <td className="fs-16 fw600 text-col1">24 January 2021</td>
                    <td className="fs-16 fw600 text-col1">$187,475</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="forecast-table mb-4">
              <h2 className="fs-20 text-col1 fw600 mb-2">Property Features</h2>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>
                      <span className="fw600">Cooling</span>
                    </td>
                    <td>Refrigerator</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw600">Water</span>
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw600">Sewage</span>
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw600">Heating</span>
                    </td>
                    <td>Forced Air</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw600">Garage</span>
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
