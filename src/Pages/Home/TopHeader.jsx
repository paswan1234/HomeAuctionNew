import { Container } from 'react-bootstrap'
import Image from '@auction/Components/Image'

import Logo from '@auction/assets/images/logo.svg'

import './Home.scss'

function TopHeader() {
  return (
    <Container fluid>
      <div className="logo-set py-4">
        <Image
          src={Logo}
          width="270"
          name="Auction"
          title="Welcome to Auction"
          className="img-fuild"
        />
      </div>
    </Container>
  )
}
export default TopHeader
