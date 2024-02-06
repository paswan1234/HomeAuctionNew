import Accordion from 'react-bootstrap/Accordion'
import Dropdown from 'react-bootstrap/Dropdown'
import { Button } from '@auction/Components/Buttons'
import { CheckBoxComponent } from '@auction/Components/FormFields'
import { CONSTANT } from '@auction/Helpers'

function FilterSection({
  selectedListName,
  selectedPropertyName,
  maxBaths,
  maxBeds,
  setSelectedListName,
  setSelectedPropertyName,
  setMaxBaths,
  setMaxBeds,
  getPropertyList,
}) {
  return (
    <>
      <div className="filterWhiteBox">
        <Accordion
          className="accordian-one"
          defaultActiveKey={['0']}
          alwaysOpen
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Listing Types</Accordion.Header>
            <Accordion.Body className="px-0 pb-0">
              <div className="mb-2">
                {CONSTANT.LISTING_TYPES.map((item) => (
                  <CheckBoxComponent
                    key={item.id}
                    label={item.name}
                    inputProps={{
                      checked: selectedListName?.some(
                        (tags) => tags === item.name
                      ),
                      onChange: () => {
                        const foundId = selectedListName?.some(
                          (listName) => listName === item.name
                        )
                        if (foundId) {
                          setSelectedListName((prevIds) =>
                            prevIds.filter((listName) => listName !== item.name)
                          )
                        } else {
                          setSelectedListName((prevId) => [
                            ...prevId,
                            item.name,
                          ])
                        }
                      },
                    }}
                  />
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Property Types</Accordion.Header>
            <Accordion.Body className="px-0 pb-0">
              <div className="mb-2">
                {CONSTANT.PROPERTY_TYPES.map((item) => (
                  <CheckBoxComponent
                    key={item.id}
                    label={item.name}
                    inputProps={{
                      checked: selectedPropertyName?.some(
                        (tags) => tags === item.name
                      ),
                      onChange: () => {
                        const foundId = selectedPropertyName?.some(
                          (propertyName) => propertyName === item.name
                        )
                        if (foundId) {
                          setSelectedPropertyName((prevIds) =>
                            prevIds.filter(
                              (propertyName) => propertyName !== item.name
                            )
                          )
                        } else {
                          setSelectedPropertyName((prevId) => [
                            ...prevId,
                            item.name,
                          ])
                        }
                      },
                    }}
                  />
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Residence</Accordion.Header>
            <Accordion.Body className="px-0 pb-0">
              <div className="d-flex w-100 align-items-center justify-content-between mb-3">
                <h3 className="mb-0 line-initial fw500 fs-16 text-col1">
                  Beds
                </h3>
                <ul className="p-0 m-0 d-flex num-ul">
                  <li className="list-style-none">
                    <Button
                      text="-"
                      className="dis-btn"
                      onClick={() => {
                        if (maxBeds >= 1) {
                          setMaxBeds((prev) => prev - 1)
                        }
                      }}
                    />
                  </li>
                  <li className="list-style-none">
                    <span className="num-text">{maxBeds}+</span>
                  </li>
                  <li className="list-style-none">
                    <Button
                      text="+"
                      className="inc-btn"
                      onClick={() => {
                        if (maxBeds < 4) {
                          setMaxBeds((prev) => prev + 1)
                        }
                      }}
                    />
                  </li>
                </ul>
              </div>
              <div className="d-flex w-100 align-items-center justify-content-between mb-3">
                <h3 className="mb-0 line-initial fw500 fs-16 text-col1">
                  Baths
                </h3>
                <ul className="p-0 m-0 d-flex num-ul">
                  <li className="list-style-none">
                    <Button
                      text="-"
                      className="dis-btn"
                      onClick={() => {
                        if (maxBaths >= 1) {
                          setMaxBaths((prev) => prev - 1)
                        }
                      }}
                    />
                  </li>
                  <li className="list-style-none">
                    <span className="num-text">{maxBaths}+</span>
                  </li>
                  <li className="list-style-none">
                    <Button
                      text="+"
                      className="inc-btn"
                      onClick={() => {
                        if (maxBaths < 4) {
                          setMaxBaths((prev) => prev + 1)
                        }
                      }}
                    />
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
      <Button
        onClick={() => {
          getPropertyList(
            selectedListName,
            selectedPropertyName,
            maxBaths,
            maxBeds
          )
        }}
        text="Submit"
      />
    </>
  )
}

export default FilterSection
