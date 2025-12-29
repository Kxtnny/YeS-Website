import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import PartnerSection from './components/PartnerSection.jsx'
import EventSection from './components/EventSection.jsx'
import {partners} from './utils/partners.js'
import {events} from './utils/events.js'


export default function App() {
  return(
    <>
      <Header />
      <HeroSection />
      <PartnerSection data={partners} />
      <EventSection data={events} />
    </>
  )
}