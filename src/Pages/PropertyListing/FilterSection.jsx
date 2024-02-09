import Accordion from 'react-bootstrap/Accordion'
import { Button } from '@auction/Components/Buttons'
import DropdownList from '@auction/Components/Dropdown/DropdownList'
import { CheckBoxComponent } from '@auction/Components/FormFields'
import RadioBoxComponent from '@auction/Components/FormFields/RadioBoxComponent'
import { CONSTANT } from '@auction/Helpers'

function FilterSection({
  selectedListName,
  selectedPropertyName,
  propertyNamed,
  maxBaths,
  maxBeds,
  minArea,
  maxArea,
  setPropertyName,
  setSelectedListName,
  setSelectedPropertyName,
  setMaxBaths,
  setMaxBeds,
  setMinArea,
  setMaxArea,
  setUpdate,
  handleResetFilter,
}) {
  const isResidential = propertyNamed === 'Residential'

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
                        (tags) => tags === item.value
                      ),
                      onChange: () => {
                        const foundId = selectedListName?.some(
                          (listName) => listName === item.value
                        )
                        if (foundId) {
                          setSelectedListName((prevIds) =>
                            prevIds.filter(
                              (listName) => listName !== item.value
                            )
                          )
                        } else {
                          setSelectedListName((prevId) => [
                            ...prevId,
                            item.value,
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
              <div className="d-flex mb-2 gap-5">
                <RadioBoxComponent
                  label="Residential"
                  value="Residential"
                  checked={propertyNamed === 'Residential'}
                  onChange={(e) => setPropertyName(e.target.value)}
                />
                <RadioBoxComponent
                  label="Commercial"
                  value="Commercial"
                  checked={propertyNamed === 'Commercial'}
                  onChange={(e) => setPropertyName(e.target.value)}
                />
              </div>
              {isResidential && (
                <div className="mb-2">
                  {CONSTANT.PROPERTY_TYPES.map((item) => (
                    <CheckBoxComponent
                      key={item.id}
                      label={item.name}
                      inputProps={{
                        checked: selectedPropertyName?.some(
                          (tags) => tags === item.value
                        ),
                        onChange: () => {
                          const foundId = selectedPropertyName?.some(
                            (propertyName) => propertyName === item.value
                          )
                          if (foundId) {
                            setSelectedPropertyName((prevIds) =>
                              prevIds.filter(
                                (propertyName) => propertyName !== item.value
                              )
                            )
                          } else {
                            setSelectedPropertyName((prevId) => [
                              ...prevId,
                              item.value,
                            ])
                          }
                        },
                      }}
                    />
                  ))}
                </div>
              )}
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
                <DropdownList
                  title={`${minArea} SqFt` || '500 SqFt'}
                  filterName={CONSTANT.PROPERTY_AREA}
                  handleFilter={(value) => {
                    setMinArea(value)
                  }}
                />
                <span className="border-center-width mx-1" />
                <DropdownList
                  title={`${maxArea} SqFt` || '2100 SqFt'}
                  filterName={CONSTANT.MAX_PROPERTY_AREA}
                  handleFilter={(value) => {
                    setMaxArea(value)
                  }}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="d-flex justify-content-end gap-3 mt-3">
        <Button
          variant="outline-secondary"
          onClick={handleResetFilter}
          text="Reset"
        />
        <Button
          variant="primary"
          onClick={() => {
            setUpdate((prev) => prev + 1)
          }}
          text="Apply filter"
        />
      </div>
    </>
  )
}

export default FilterSection
