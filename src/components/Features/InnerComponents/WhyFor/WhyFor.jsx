import MainButton from "components/Buttons/Main/MainButton"
import SecondaryButton from "components/Buttons/Secondary/SecondaryButton"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Dots from "./Dots"

const WhyFor = () => {
  const wfRef = useRef(null);
  const inWfRef = useInView(wfRef, { once: true });

  const initial = {
    opacity: 0,
    scale: .7,
    y: "50px"
  }

  const final = {
    opacity: 1,
    scale: 1,
    y: 0
  }

  const transition = {
    duration: .7,
  }

  return (
    <motion.div ref={wfRef} className='wfWrapper' initial={initial} animate={inWfRef && final} transition={transition}>
        <Dots />
        <div className="col">
            <div className="colwr">
                <h3>Why is this extension for you?</h3>
                <p>Champ will inform you about every possible threat and make your internet activity inaccessible for third parties.</p>
            </div>
            <div className="colwr">
                <MainButton text="Get Started" />
                <SecondaryButton text="More Features" />
            </div>
        </div>
    </motion.div>
  )
}

export default WhyFor