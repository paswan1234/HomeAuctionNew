import { Col, Form, Row } from 'react-bootstrap'
import { Button } from '@auction/Components/Buttons'

function QuestionDetail() {
  return (
    <div className="detailRightSec">
      <div className="checkAvailability">
        <div className="SectionBlock">
          <div className="mb-4">
            <h2 className="text-col1 fw600 fs-20 mb-2">
              Questions about this property?
            </h2>
            <p className="text-col5 fw400 fs-14 mb-0">
              Get connected with a Local Agent immediately
            </p>
          </div>
          <div className="rentalForm">
            <Row>
              <Col sm={12}>
                <Form.Group
                  className="mb-3 position-relative"
                  controlId="exampleForm.ControlInput1"
                >
                  <i className="fa fa-user" />
                  <Form.Control
                    type="text"
                    placeholder="Full name"
                    className="textInput"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 position-relative"
                  controlId="exampleForm.Phone"
                >
                  <i className="fa fa-phone" />
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    className="textInput"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 position-relative"
                  controlId="exampleForm.Email"
                >
                  <i className="fa fa-envelope" />
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="textInput"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 position-relative"
                  controlId="exampleForm.Msg"
                >
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Hi, I’d like to be connected with a local real estate expert about S Kimbark Ave on AuctionDeals.com"
                    className="textInput"
                  />
                </Form.Group>
                <Form.Group className="mb-4 position-relative">
                  <Form.Check
                    type="checkbox"
                    aria-label="option 1"
                    name="option 1"
                    label="I’d like to periodically receive information about foreclosure properties"
                  />
                </Form.Group>
                <div className="d-flex align-items-center flex-wrap p-0 mb-4">
                  <Button
                    text="Get Connected"
                    className="longBtn greenBtnLongBtn d-block w-100"
                  />
                </div>
                <div className="termsCond">
                  <p className="mb-0 fs-16 fw400 text-col1">
                    By clicking the button, you agree to our{' '}
                    <span className="text-col2 text-none cursor-pointer">
                      Terms of Use
                    </span>{' '}
                    and{' '}
                    <span className="text-col2 text-none cursor-pointer">
                      Privacy Policy
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail
