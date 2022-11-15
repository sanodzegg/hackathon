import "./Navbar.css"
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import MainButton from "components/Buttons/Main/MainButton";
import { motion } from "framer-motion";


const Navbar = () => {

    return (
        <div className="navWrapper">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
                <nav>
                    <div className="logo">
                        <Logo />
                        <h1>CHAMP</h1>
                    </div>
                    <ul>
                        <li>About</li>
                        <li>Platforms</li>
                        <li>Features</li>
                        <li>Help</li>
                    </ul>
                    <MainButton text="Get CHAMP" />
                </nav>
            </motion.div>
        </div>
    )
}

export default Navbar