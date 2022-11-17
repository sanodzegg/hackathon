import "./HDSection.css"
import uniqueId from "lodash.uniqueid"
import Header from './InnerComponents/Header'
import Steps from "./InnerComponents/Steps"

import data from "data/steps"

const HDSection = () => {
  return (
    <section className="HDSectionWrapper">
        <Header />
        <div className="stepsParent">
          {data.map(e => {
            return <Steps key={uniqueId()} icon={e.icon} step={e.step} description={e.description} />
          })}
        </div>
    </section>
  )
}

export default HDSection