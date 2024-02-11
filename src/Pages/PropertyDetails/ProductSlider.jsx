import Carousel from 'react-bootstrap/Carousel'
import Image from '@auction/Components/Image'

import MapIcon from '@auction/assets/images/svg/map.svg'
import PhotosIcon from '@auction/assets/images/svg/photos.svg'
import BannerOne from '@auction/assets/images/proslider.png'

function ProductSlider() {
  return (
    <div className="slider-banner">
      <Carousel>
        <Carousel.Item>
          <div className="slider-inner postion-relative">
            <div className="slider-box">
              <Image src={BannerOne} alt="Slider" className="img-fluid w-100" />
            </div>
            <div className="imageAboveTags">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center whiteBox fs-16 fw500 text-col1 me-1 me-sm-2">
                  <Image src={PhotosIcon} name="Photo" className="me-2" /> See
                  All 32 Photos
                </div>
                <div className="d-flex align-items-center whiteBox fs-16 fw500 text-col1">
                  <Image src={MapIcon} name="Map" className="me-2 img-fluid" />{' '}
                  Map
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-inner postion-relative">
            <div className="slider-box">
              <Image src={BannerOne} alt="Slider" className="img-fluid w-100" />
            </div>
            <div className="imageAboveTags">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center whiteBox fs-16 fw500 text-col1 me-2">
                  <Image src={PhotosIcon} name="Photo" className="me-2" /> See
                  All 32 Photos
                </div>
                <div className="d-flex align-items-center whiteBox fs-16 fw500 text-col1">
                  <Image src={MapIcon} name="Map" className="me-2 img-fluid" />{' '}
                  Map
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ProductSlider
