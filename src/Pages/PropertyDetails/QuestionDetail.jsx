import { useCallback } from 'react'

import { Col, Row } from 'react-bootstrap'
import { Button } from '@auction/Components/Buttons'
import { CheckBoxField, InputField } from '@auction/Components/FormFields'
import { ENQUIRY_FORM_SCHEMAS } from '@auction/Helpers/validationSchema'
import useCustomToast from '@auction/Hooks/useCustomToast'
import mainApiService from '@auction/Services/apiService'
import { Form, Formik } from 'formik'

const DEFAULT_CREATE_FORM = {
  fullName: '',
  phone: '',
  email: '',
  description: '',
  notification: false,
}

function QuestionDetail() {
  const { successDispatch, errorDispatch } = useCustomToast()

  const handleFormSubmit = useCallback(
    async (formValues, { resetForm }) => {
      const payload = {
        fullName: formValues.fullName,
        phone: formValues.phone,
        email: formValues.email,
        description: formValues.description,
        notification: formValues.notification,
      }
      try {
        const result = await mainApiService('enquireProperty', payload)
        if (result?.status === 200) {
          resetForm()
          successDispatch('Successfully submitted')
        }
      } catch (err) {
        errorDispatch(err)
      }
    },
    [errorDispatch, successDispatch]
  )

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
                <Formik
                  initialValues={DEFAULT_CREATE_FORM}
                  validationSchema={ENQUIRY_FORM_SCHEMAS}
                  onSubmit={handleFormSubmit}
                >
                  {() => {
                    return (
                      <Form>
                        <InputField
                          type="text"
                          name="fullName"
                          className="fa fa-user"
                          label="Full name"
                          placeholder="Full name"
                        />
                        <InputField
                          type="number"
                          name="phone"
                          className="fa fa-phone"
                          placeholder="Phone"
                        />
                        <InputField
                          type="email"
                          name="email"
                          className="fa fa-envelope"
                          placeholder="Email"
                        />
                        <InputField
                          as="textarea"
                          rows="3"
                          name="description"
                          placeholder="Hi, I’d like to be connected with a local real estate expert about S Kimbark Ave on AuctionDeals.com"
                        />
                        <CheckBoxField
                          id="option-1"
                          name="notification"
                          label="I’d like to periodically receive information about foreclosure properties"
                        />
                        <div className="d-flex align-items-center flex-wrap p-0 mb-4">
                          <Button
                            text="Get Connected"
                            type="submit"
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
                      </Form>
                    )
                  }}
                </Formik>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail
