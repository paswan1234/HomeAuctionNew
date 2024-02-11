import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Image from '@auction/Components/Image'

import ROUTES from '@auction/Routes/routes'

import CardoneImg from '@auction/assets/images/pro1.png'

export default function PropertyCard({ propertyData }) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="sliderItem">
        <div className="slider-box-img">
          <Image src={CardoneImg} alt="Services" className="w-100" />
        </div>
        <Button className="likeTag transition">
          <i className="fa fa-heart-o fs-12" aria-hidden="true" />
        </Button>
        <div className="sliderTagName text-col1 fw400">New</div>
        <div className="sliderTextArea">
          <div className="d-flex align-items-center">
            <h5 className="text-col1 fs-24 fw700 mb-0">
              ${propertyData.RentValue}
            </h5>
            <div className="ms-auto statusblock">
              <div className="d-flex align-items-center">
                <div className="dot orange" />
                <p className="mb-0 ftSze14 ftWgt500">{propertyData.saletype}</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-top">
            <div>
              <h4 className="fw500 fs-18 mb-0 line-clamp-two">
                {propertyData.Address}
              </h4>
            </div>
          </div>
          <div className="sliderListing">
            <ul className="clearfix d-flex align-items-center">
              <li>
                <b className="text-col1">{propertyData.BedroomsTotal}</b>
                beds
              </li>
              <li>
                <b className="text-col1">{propertyData.BathsFull}</b>baths
              </li>
              <li>
                <b className="text-col1">{propertyData.LivingArea}</b>sq.ft
              </li>
            </ul>
          </div>
          <div className="linkproperty text-center">
            <Button
              className="fs-16 p-0 bg-transparent fw600 text-col4"
              onClick={() =>
                navigate(ROUTES.propertyDetails.base, {
                  state: {
                    property: propertyData,
                  },
                })
              }
            >
              View Property Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
