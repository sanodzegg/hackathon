import "./Navbar.css"
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import MainButton from "components/Buttons/Main/MainButton";


const Navbar = () => {

    return (
        <div className="navWrapper">
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
        </div>
    )
}

export default Navbar