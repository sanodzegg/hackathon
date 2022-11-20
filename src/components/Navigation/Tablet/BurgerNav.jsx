import { motion } from 'framer-motion'
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import BurgerMenu from './BurgerMenu/BurgerMenu';

const BurgerNav = () => {
  return (
    <motion.div className='burgerMenuWrapper' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
        <Logo />
        <BurgerMenu />
    </motion.div>
  )
}

export default BurgerNav