import Navbar from "./components/Navigation/Navbar";
import Hero from "components/Hero/Hero";
import LogoStrip from "components/LogoStrip/LogoStrip";
import Features from "components/Features/Features";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Features />
    </>
  );
}

export default Landing;
