import "./Hero.css"
import HeroImage from "./InnerComponents/HeroImage"
import HeroText from "./InnerComponents/HeroText"

const Hero = () => {
  return (
    <section>
        <HeroText />
        <HeroImage />
    </section>
  )
}

export default Hero