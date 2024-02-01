import BannerSection from './BannerSection'
import CardListing from './CardListing'
import CardOne from './CardOne'
import NewsletterSection from './NewsletterSection'
import TopHeader from './TopHeader'

import './Home.scss'

function DashboardPage() {
  return (
    <div className="home-page">
      <TopHeader />
      <BannerSection />
      <CardOne />
      <NewsletterSection />
      <CardListing />
    </div>
  )
}
export default DashboardPage
