import { useEffect, useState } from "react"
import FullNav from "./1080/FullNav"
import "./Navbar.css"
import BurgerNav from "./Tablet/BurgerNav";



const Navbar = () => {
    const [vwType, setVWType] = useState(null); // 0 pc 1 mobile


    const handleResize = () => {
        const vw = window.innerWidth;
        if(vw < 810) setVWType(1);
        else setVWType(0);
    }

    useEffect(() => {
        handleResize();
    }, []);

    window.addEventListener("resize", handleResize)

    return (
        <div className="navWrapper">
            { vwType !== null && vwType === 0 ? <FullNav /> : <BurgerNav /> }
        </div>
    )
}

export default Navbar