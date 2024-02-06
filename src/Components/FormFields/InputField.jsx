import { Form } from 'react-bootstrap'
import { handleKeyDownOnlyNumbers } from '@auction/Helpers'
import { useField } from 'formik'

import './Input.scss'

function InputField({ className, type, ...props }) {
  const [field, meta] = useField(props)
  const errorMsg = meta.error && meta.touched ? meta.error : ''

  return (
    <>
      <Form.Group
        className="mb-3 position-relative"
        controlId="exampleForm.ControlInput1"
      >
        <i className={className} />
        <Form.Control
          className="form-control"
          {...field}
          {...props}
          type={type}
          onKeyDown={(e) => type === 'number' && handleKeyDownOnlyNumbers(e)}
        />
      </Form.Group>

      {!!errorMsg && <span className="error">{errorMsg}</span>}
    </>
  )
}

export default InputField
