import "./Footer.css";
import { motion } from "framer-motion";
import { ReactComponent as Logo } from "assets/icons/logo.svg"

const Footer = () => {
  return (
    <motion.footer>
        <hr />
        <div className="wrapper">
            <Logo className="logo" />
            <span>© LogN</span>
            <img className="btu" src="https://btu.edu.ge/wp-content/uploads/2021/06/BTU_Logo_new-1.svg" alt="" />
        </div>
    </motion.footer>
  )
}

export default Footer