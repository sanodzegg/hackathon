import Dots from 'components/Features/InnerComponents/WhyFor/Dots/Dots'
import React from 'react'

const Header = () => {
  return (
    <div className='HDHeaderWrapper'>
        <div className="col">
            <Dots />
            <h3>How does Champ extension work?</h3>
        </div>
        <p>Give champ all of the required permissions it will inform you about every possible threat and make your internet activity inaccessible for third parties.</p>
    </div>
  )
}

export default Header