import Footer from '@auction/Layout/Footer'
import TopHeader from '@auction/Layout/Header'

import BannerSection from './BannerSection'
import CardOne from './CardOne'
import ForeclosureSection from './ForeclosureSection'
import HomePropertyList from './HomePropertyList'
import NewsletterSection from './NewsletterSection'
import PopularCity from './PopularCity'

import './Home.scss'

function DashboardPage() {
  return (
    <div className="home-page">
      <TopHeader />
      <BannerSection />
      <CardOne />
      <NewsletterSection />
      <HomePropertyList />
      <PopularCity />
      <ForeclosureSection />
      <Footer />
    </div>
  )
}
export default DashboardPage
