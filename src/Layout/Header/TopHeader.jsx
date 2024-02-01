import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from '@auction/Components/Image'

import Logo from '@auction/assets/images/logo.svg'

function TopHeader() {
  return (
    <Container fluid>
      <Link to="/">
        <div className="logo-set py-4">
          <Image
            src={Logo}
            width="270"
            name="Auction"
            title="Welcome to Auction"
            className="img-fuild"
          />
        </div>
      </Link>
    </Container>
  )
}
export default TopHeader
