import { Form } from 'react-bootstrap'
import { useField } from 'formik'

import './Checkbox.scss'

function CheckBoxField({ label, ...props }) {
  const [field] = useField(props)
  return (
    <div className="checkboxWrap form-check">
      <Form.Check
        type="checkbox"
        id={field.id}
        label={label}
        {...field}
        {...props}
      />
    </div>
  )
}
export default CheckBoxField
