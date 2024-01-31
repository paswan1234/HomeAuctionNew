/* eslint-disable react/button-has-type */
import Image from '@auction/Components/Image'

import '@auction/Components/Buttons/Buttons.scss'

function ButtonComponent({
  size,
  variant,
  className,
  text,
  type,
  iconSrc,
  crossSrc,
  crossClick,
  disable,
  ...rest
}) {
  const classes = `button ${variant || ''} ${className || ''} ${size || ''}`
  return (
    <button
      disabled={disable}
      className={classes}
      {...rest}
      name={text}
      type={type}
    >
      {iconSrc ? <Image className="me-2" src={iconSrc} alt="img" /> : ''}
      {text}
      {crossSrc ? (
        <Image className="ms-2" src={crossSrc} alt="img" onClick={crossClick} />
      ) : (
        ''
      )}
    </button>
  )
}

export default ButtonComponent
