import { Button, Container } from 'react-bootstrap'
import Slider from 'react-slick'
import Image from '@auction/Components/Image'

import CardoneImg from '@auction/assets/images/pro1.png'
import CardtwoImg from '@auction/assets/images/pro2.png'
import CardthreeImg from '@auction/assets/images/pro3.png'

import './Home.scss'

function CardListing() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="card-listing py-5">
      <Container>
        <div className="titleSection">
          <h2 className="text-col1 fs-24 fw500">
            Foreclosures properties in Jersey City, New Jersey
          </h2>
          <p className="text-col1 fs-16 fw500">Showing 1-25 properties of 48</p>
        </div>
        <div>
          <Slider {...settings}>
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
                    <h5 className="text-col1 fs-24 fw700 mb-0">$559,000</h5>
                    <div className="ms-auto statusblock">
                      <div className="d-flex align-items-center">
                        <div className="dot orange" />
                        <p className="mb-0 ftSze14 ftWgt500">AUCTION</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-top">
                    <div>
                      <h4 className="fw500 fs-18 mb-0">
                        205 Beechwood Ave, Staten Island, NY 10301
                      </h4>
                    </div>
                  </div>
                  <div className="sliderListing">
                    <ul className="clearfix d-flex align-items-center">
                      <li>
                        <b className="text-col1">3</b>beds
                      </li>
                      <li>
                        <b className="text-col1">1.5</b>baths
                      </li>
                      <li>
                        <b className="text-col1">3,193</b>sq.ft
                      </li>
                    </ul>
                  </div>
                  <div className="linkproperty text-center">
                    <Button className="fs-16 p-0 bg-transparent fw600 text-col4">
                      View Property Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="sliderItem">
                <div className="slider-box-img">
                  <Image src={CardtwoImg} alt="Services" className="w-100" />
                </div>
                <Button className="likeTag transition">
                  <i className="fa fa-heart-o fs-12" aria-hidden="true" />
                </Button>
                <div className="sliderTagName text-col1 fw400">New</div>
                <div className="sliderTextArea">
                  <div className="d-flex align-items-center">
                    <h5 className="text-col1 fs-24 fw700 mb-0">$559,000</h5>
                    <div className="ms-auto statusblock">
                      <div className="d-flex align-items-center">
                        <div className="dot orange" />
                        <p className="mb-0 ftSze14 ftWgt500">AUCTION</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-top">
                    <div>
                      <h4 className="fw500 fs-18 mb-0">
                        205 Beechwood Ave, Staten Island, NY 10301
                      </h4>
                    </div>
                  </div>
                  <div className="sliderListing">
                    <ul className="clearfix d-flex align-items-center">
                      <li>
                        <b className="text-col1">3</b>beds
                      </li>
                      <li>
                        <b className="text-col1">1.5</b>baths
                      </li>
                      <li>
                        <b className="text-col1">3,193</b>sq.ft
                      </li>
                    </ul>
                  </div>
                  <div className="linkproperty text-center">
                    <Button className="fs-16 p-0 bg-transparent fw600 text-col4">
                      View Property Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="sliderItem">
                <div className="slider-box-img">
                  <Image src={CardthreeImg} alt="Services" className="w-100" />
                </div>
                <Button className="likeTag transition">
                  <i className="fa fa-heart-o fs-12" aria-hidden="true" />
                </Button>
                <div className="sliderTagName text-col1 fw400">New</div>
                <div className="sliderTextArea">
                  <div className="d-flex align-items-center">
                    <h5 className="text-col1 fs-24 fw700 mb-0">$559,000</h5>
                    <div className="ms-auto statusblock">
                      <div className="d-flex align-items-center">
                        <div className="dot orange" />
                        <p className="mb-0 ftSze14 ftWgt500">AUCTION</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-top">
                    <div>
                      <h4 className="fw500 fs-18 mb-0">
                        205 Beechwood Ave, Staten Island, NY 10301
                      </h4>
                    </div>
                  </div>
                  <div className="sliderListing">
                    <ul className="clearfix d-flex align-items-center">
                      <li>
                        <b className="text-col1">3</b>beds
                      </li>
                      <li>
                        <b className="text-col1">1.5</b>baths
                      </li>
                      <li>
                        <b className="text-col1">3,193</b>sq.ft
                      </li>
                    </ul>
                  </div>
                  <div className="linkproperty text-center">
                    <Button className="fs-16 p-0 bg-transparent fw600 text-col4">
                      View Property Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="sliderItem">
                <div className="slider-box-img">
                  <Image src={CardtwoImg} alt="Services" className="w-100" />
                </div>
                <Button className="likeTag transition">
                  <i className="fa fa-heart-o fs-12" aria-hidden="true" />
                </Button>
                <div className="sliderTagName text-col1 fw400">New</div>
                <div className="sliderTextArea">
                  <div className="d-flex align-items-center">
                    <h5 className="text-col1 fs-24 fw700 mb-0">$559,000</h5>
                    <div className="ms-auto statusblock">
                      <div className="d-flex align-items-center">
                        <div className="dot orange" />
                        <p className="mb-0 ftSze14 ftWgt500">AUCTION</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-top">
                    <div>
                      <h4 className="fw500 fs-18 mb-0">
                        205 Beechwood Ave, Staten Island, NY 10301
                      </h4>
                    </div>
                  </div>
                  <div className="sliderListing">
                    <ul className="clearfix d-flex align-items-center">
                      <li>
                        <b className="text-col1">3</b>beds
                      </li>
                      <li>
                        <b className="text-col1">1.5</b>baths
                      </li>
                      <li>
                        <b className="text-col1">3,193</b>sq.ft
                      </li>
                    </ul>
                  </div>
                  <div className="linkproperty text-center">
                    <Button className="fs-16 p-0 bg-transparent fw600 text-col4">
                      View Property Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  )
}
export default CardListing
