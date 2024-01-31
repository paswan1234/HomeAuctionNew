import { Breadcrumb as BootStrapBreadCrumb } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import '@auction/Components/Breadcrumb/Breadcrumb.scss'

export default function Breadcrumb({ breadCrumb = [], isShow = true }) {
  const location = useLocation()
  return (
    <BootStrapBreadCrumb>
      {isShow && (
        <BootStrapBreadCrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Home
        </BootStrapBreadCrumb.Item>
      )}
      {breadCrumb.map(({ label, path, isActive }) => (
        <BootStrapBreadCrumb.Item
          key={path}
          linkAs={Link}
          linkProps={{ to: path }}
        >
          <span
            className={
              location.pathname === path || isActive ? 'text-danger' : ''
            }
          >
            {label}
          </span>
        </BootStrapBreadCrumb.Item>
      ))}
    </BootStrapBreadCrumb>
  )
}
