import { Container } from 'react-bootstrap'
import PropertyCard from '@auction/Components/PropertyCard'
import { Slider } from '@auction/Components/Slider'

import './Home.scss'

function HomePropertyList() {
  return (
    <section className="card-listing py-5">
      <Container>
        <div className="titleSection">
          <h2 className="text-col1 fs-24 fw500">
            Foreclosures properties in Jersey City, New Jersey
          </h2>
          <p className="text-col1 fs-16 fw500">Showing 1-25 properties of 48</p>
        </div>
        <div className="home-slide">
          <Slider>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </Slider>
        </div>
      </Container>
    </section>
  )
}
export default HomePropertyList
