import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

import SecondaryButton from 'components/Buttons/Secondary/SecondaryButton'

import Phone from "assets/images/phone.png"
import WallPaper from "assets/images/template.webp"

const LMBox = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "35px"]);

  const lmRef = useRef(null);
  const inLmRef = useInView(lmRef, { once: true });

  return (
    <div className='lmBoxWrapper' ref={lmRef}>
        <div className="col">
            {inLmRef && 
            <>
              <motion.h3 initial={{ y: "50px", opacity: 0 }} animate={{ y: "0", opacity: 1 }} transition={{ duration: .5 }}>Easy to use</motion.h3>
              <motion.p initial={{ y: "50px", opacity: 0 }} animate={{ y: "0", opacity: 1 }} transition={{ duration: .5, delay: .5 }}>Champ is quite easy to use, you just turn it on and leave him to handle everything by himself.</motion.p>
              <motion.div initial={{ y: "50px", opacity: 0 }} animate={{ y: "0", opacity: 1 }} transition={{ duration: .5, delay: 1 }}><SecondaryButton text="Learn More" /></motion.div>
            </>
            }
        </div>
        <div className="col">
            {inLmRef && <motion.div className='phoneWrapper' style={{ y }} 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: 1 }} whileInView="visible"><img src={Phone} alt="phone" /></motion.div>}
        </div>
        <img className='lmBoxWallpaper' src={WallPaper} alt="wallpaper" />
    </div>
  )
}

export default LMBox