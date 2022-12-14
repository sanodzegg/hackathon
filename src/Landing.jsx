import Navbar from "./components/Navigation/Navbar";
import Hero from "components/Hero/Hero";
import LogoStrip from "components/LogoStrip/LogoStrip";
import Features from "components/Features/Features";
import HDSection from "components/HDSection/HDSection";
import Footer from "components/Footer/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Features />
      <HDSection />
      <Footer />
    </>
  );
}

export default Landing;
