import AboutSection from "./HomeAbout"
import HeroSection from "./HomeHero"
import StatsSection from "./HomeStats"
import HomeTestimonials from "./HomeTestimonials"
import WhatWeOffer from "./HomeWhatWeOffer"
// import JourneySection from "./JourneySection"

const HomeMain = () => {
  return (
    <>
      <HeroSection/>
      <StatsSection/>
      <AboutSection/>
      {/* <JourneySection/> */}
        <HomeTestimonials/>
      <WhatWeOffer/>
    
    </>
  )
}

export default HomeMain
