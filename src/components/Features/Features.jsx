import "./Features.css";
import LMBox from "./InnerComponents/LMBox";
import WhyFor from "./InnerComponents/WhyFor/WhyFor";

const Features = () => {
  return (
    <section className="featuresWrapper">
        <hr />
        <WhyFor />
        <LMBox />
    </section>
  )
}

export default Features