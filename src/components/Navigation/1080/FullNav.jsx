import { ReactComponent as Logo } from "assets/icons/logo.svg";
import MainButton from "components/Buttons/Main/MainButton";
import { motion } from "framer-motion";

const FullNav = () => {
  const scrollTo = (link) => {
    if(link === "about") window.scrollTo({
      top: 1100,
      behavior: "smooth"
    });
    if(link === "platforms") window.scrollTo({
      top: 700,
      behavior: "smooth"
    });
    if(link === "features") window.scrollTo({
      top: 2000,
      behavior: "smooth"
    });
    if(link === "help") window.scrollTo({
      top: 2700,
      behavior: "smooth"
    });
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
        <nav>
            <div className="logo">
                <Logo />
                <h1>CHAMP</h1>
            </div>
            <ul>
                <li onClick={() => scrollTo("about")}>About</li>
                <li onClick={() => scrollTo("platforms")}>Platforms</li>
                <li onClick={() => scrollTo("features")}>Features</li>
                <li onClick={() => scrollTo("help")}>Help</li>
            </ul>
            <MainButton text="Get CHAMP" />
        </nav>
    </motion.div>
  )
}

export default FullNav;