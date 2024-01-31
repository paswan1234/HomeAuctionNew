import '@auction/Components/Image/Image.scss'

/**
 * Name:Image
 * Desc: Render image
 * @param {string} src
 * @param {string} name
 * @param {string} className
 * @param {string} alt
 */

function Image({ src, name, className = '', alt, ...rest }) {
  return (
    <img
      src={src}
      name={name}
      className={className}
      alt={alt || name || 'Auction_Img'}
      {...rest}
    />
  )
}

export default Image
