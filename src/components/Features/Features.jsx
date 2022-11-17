import "./Features.css";
import LMBox from "./InnerComponents/LMBox";
import WhyFor from "./InnerComponents/WhyFor/WhyFor";

import features from "data/features";
import Feature from "./InnerComponents/Feature";
import uniqueId from "lodash.uniqueid";

const Features = () => {
  return (
    <section className="featuresWrapper">
        <hr />
        <WhyFor />
        <LMBox />
        <section className="features">
          {features.map(e => <Feature key={uniqueId()} src={e.src} title={e.header} description={e.description} />)}
        </section>
    </section>
  )
}

export default Features