import { useState } from "react"
import "./BurgerMenu.css"

const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <div className='burgerWrapper' onClick={() => setActive(!active)}>
      <div className={`dash${active ? ' active' : ''}`}></div>        
      <div className={`dash${active ? ' active' : ''}`}></div>
    </div>
  )
}

export default BurgerMenu