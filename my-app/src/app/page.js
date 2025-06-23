import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import Technology from '../components/Technology'
import AdvanceTechnical from '../components/AdvanceTechnical'
import Investors from '../components/Investors'
import EventsNews from '../components/EventsNews'
import CulturePage from '../components/CulturePage'
import KeySection from '../components/keySection'
import Footer from '../components/Footer'

// this is home page 


export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <AboutUs />
      <Technology />
      <AdvanceTechnical />
      <Investors />
      <EventsNews />
      <CulturePage />
      <KeySection />
      <Footer />
    </main>
  );
}
