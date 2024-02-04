import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image from '@auction/Components/Image'

import Logo from '@auction/assets/images/logo.svg'

function TopHeader() {
  return (
    <div className="top-header">
      <Container fluid>
        <div className="logo-set py-4">
          <Link to="/">
            <Image
              src={Logo}
              width="270"
              name="Auction"
              title="Welcome to Auction"
              className="img-fuild"
            />
          </Link>
        </div>
      </Container>
    </div>
  )
}
export default TopHeader
