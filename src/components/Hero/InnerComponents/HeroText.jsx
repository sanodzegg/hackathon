import { motion } from "framer-motion"
import HeroButtons from "./HeroButtons"

const HeroText = () => {

  const header = {
    initial: {
      y: "50px",
      opacity: 0,
      rotateX: "90deg"
    },
    animate: {
      y: "0px",
      opacity: 1,
      rotateX: "0deg"
    },
    transition: {
      duration: 1,
      type: 'spring'
    }
  }
  const par = {
    initial: {
      y: "50px",
      opacity: 0
    },
    animate: {
      y: "0px",
      opacity: 1
    },
    transition: {
      delay: .7,
      duration: .5
    }
  }

  return (
    <div className='heroTextWrapper'>
        <motion.h1 initial={header.initial} animate={header.animate} transition={header.transition}>Guarding Champ</motion.h1>
        <motion.p initial={par.initial} animate={par.animate} transition={par.transition}>Filters out ads and scams. Gets rid of inappropriate content and lets you remain secure while surfing over browser safely.</motion.p>
        <motion.div initial={par.initial} animate={par.animate} transition={par.transition}><HeroButtons /></motion.div>
    </div>
  )
}

export default HeroText