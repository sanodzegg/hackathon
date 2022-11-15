import "./LogoStrip.css"
import data from "data/strip"
import uniqueId from "lodash.uniqueid"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const LogoStrip = () => {
    const strip = useRef(null);

    let stripInView = useInView(strip, { once: true });

    return (
        <motion.div className="stripWrapper" ref={strip} initial={{ opacity: 0 }} animate={{ opacity: stripInView ? 1 : 0 }} 
        transition={{ delay: .5 }}>
            <div className="cover"></div>
            <div className="logos">
                {[...data, ...data, ...data].map(e => <img key={uniqueId()} src={e.src} alt={e.alt} />)}
            </div>
        </motion.div>
    )
}

export default LogoStrip