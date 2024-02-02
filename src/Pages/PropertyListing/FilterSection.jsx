import Accordion from 'react-bootstrap/Accordion'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import { Button } from '@auction/Components/Buttons'

function FilterSection() {
  return (
    <div className="filterWhiteBox">
      <Accordion className="accordian-one" defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Listing Types</Accordion.Header>
          <Accordion.Body className="px-0 pb-0">
            <div className="mb-2">
              <Form.Check
                type="checkbox"
                inline
                aria-label="option 1"
                name="option 1"
                label="Foreclosures"
              />
            </div>
            <div className="mb-2">
              <Form.Check
                type="checkbox"
                inline
                aria-label="option 2"
                name="option 2"
                label="REO Bank Owned"
              />
            </div>
            <div>
              <Form.Check
                type="checkbox"
                inline
                aria-label="option 3"
                name="option 3"
                label="
Pre-Foreclosures"
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Property Types</Accordion.Header>
          <Accordion.Body className="px-0 pb-0">
            <div className="mb-2">
              <Form.Check
                type="checkbox"
                inline
                aria-label="option 1"
                name="option 1"
                label="Single-Family"
              />
            </div>
            <div className="mb-2">
              <Form.Check
                type="checkbox"
                inline
                aria-label="option 2"
                name="option 2"
                label="Condo"
              />
            </div>
            <div className="mb-2">
              <Form.Check
                type="checkbox"
                inline
                aria-label="option 3"
                name="option 3"
                label="
Multi-Family"
              />
            </div>
            <div className="mb-2">
              <Form.Check
                type="checkbox"
                inline
                aria-label="option 3"
                name="option 3"
                label="Mobile Home"
              />
            </div>
            <div>
              <Form.Check
                type="checkbox"
                inline
                aria-label="option 3"
                name="option 3"
                label="Commercial"
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Residence</Accordion.Header>
          <Accordion.Body className="px-0 pb-0">
            <div className="d-flex w-100 align-items-center justify-content-between mb-3">
              <h3 className="mb-0 line-initial fw500 fs-16 text-col1">Beds</h3>
              <ul className="p-0 m-0 d-flex num-ul">
                <li className="list-style-none">
                  <Button text="-" className="dis-btn" />
                </li>
                <li className="list-style-none">
                  <span className="num-text">0+</span>
                </li>
                <li className="list-style-none">
                  <Button text="+" className="inc-btn" />
                </li>
              </ul>
            </div>
            <div className="d-flex w-100 align-items-center justify-content-between mb-3">
              <h3 className="mb-0 line-initial fw500 fs-16 text-col1">Baths</h3>
              <ul className="p-0 m-0 d-flex num-ul">
                <li className="list-style-none">
                  <Button text="-" className="dis-btn" />
                </li>
                <li className="list-style-none">
                  <span className="num-text">0+</span>
                </li>
                <li className="list-style-none">
                  <Button text="+" className="inc-btn" />
                </li>
              </ul>
            </div>
            <h3 className="mb-2 line-initial fw500 fs-16 text-col1">
              500 SqFt
            </h3>
            <div className="w-100 d-flex align-items-center dropdown-filters">
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  500 SqFt
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>600 SqFt</Dropdown.Item>
                  <Dropdown.Item>750 SqFt</Dropdown.Item>
                  <Dropdown.Item>1000 SqFt</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <span className="border-center-width mx-1" />
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  2100 SqFt
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>600 SqFt</Dropdown.Item>
                  <Dropdown.Item>750 SqFt</Dropdown.Item>
                  <Dropdown.Item>1000 SqFt</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default FilterSection
