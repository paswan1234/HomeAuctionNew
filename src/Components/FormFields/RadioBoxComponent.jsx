export default function RadioBoxComponent({ label, ...rest }) {
  return (
    <>
      {/* <Form.Check type="radio" aria-label="radio 1" /> */}
      <div className="radioWrap">
        <input type="radio" name={label} {...rest} />
        <label htmlFor={label}>{label}</label>
      </div>
    </>
  )
}
