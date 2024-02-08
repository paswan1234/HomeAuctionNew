import { Dropdown } from 'react-bootstrap'

function DropdownList({
  title,
  filterName = [],
  handleFilter,
  className,
  disable,
}) {
  return (
    <Dropdown className="dropdown-select-custom drop-listing">
      <Dropdown.Toggle
        variant="success"
        className={className}
        id="dropdown-basic "
        disabled={disable}
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu className="mt-2">
        <span className="dropdown-menu-arrow" />
        <div className="menu-list">
          {filterName.map((item) => (
            <Dropdown.Item
              key={item.id}
              onClick={() => handleFilter(item.value)}
            >
              {item.name}
            </Dropdown.Item>
          ))}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownList
