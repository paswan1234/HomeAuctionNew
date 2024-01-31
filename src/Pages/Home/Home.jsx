import BannerSection from './BannerSection'
import CardOne from './CardOne'
import TopHeader from './TopHeader'

import './Home.scss'

function DashboardPage() {
  return (
    <div className="home-page">
      <TopHeader />
      <BannerSection />
      <CardOne />
    </div>
  )
}
export default DashboardPage
