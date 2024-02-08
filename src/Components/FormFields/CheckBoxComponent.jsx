import { Form } from 'react-bootstrap'

export default function CheckBoxComponent({ id, label, inputProps = {} }) {
  return (
    <Form.Check
      id={id}
      type="checkbox"
      name="checkbox-group"
      label={label}
      {...inputProps}
    />
  )
}
