import { Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from '@auction/Components/Buttons'
import Image from '@auction/Components/Image'

import Logo from '@auction/assets/images/logo.svg'
import SearchIcon from '@auction/assets/images/svg/search.svg'

function TopHeader() {
  return (
    <div className="top-header">
      <Container fluid>
        <div className="d-flex align-items-center flex-column flex-sm-row py-4">
          <div className="logo-set mb-3 mb-sm-0">
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
          <div className="d-flex align-items-center searchBoxx ms-sm-4">
            <div className="d-flex align-items-center">
              <div className="mb-0 w-100">
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter another city"
                />
              </div>
            </div>
            <div className="ms-auto">
              <Button iconSrc={SearchIcon} className="p-0 outline-0 border-0" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default TopHeader
