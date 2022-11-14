import SecondaryButton from 'components/Buttons/Secondary/SecondaryButton'

import Phone from "assets/images/phone.png"
import WallPaper from "assets/images/template.webp"

const LMBox = () => {
  return (
    <div className='lmBoxWrapper'>
        <div className="col">
            <h3>Easy to use</h3>
            <p>Champ is quite easy to use, you just turn it on and leave him to handle everything by himself.</p>
            <SecondaryButton text="Learn More" />
        </div>
        <div className="col">
            <img src={Phone} alt="phone" />
        </div>
        <img className='lmBoxWallpaper' src={WallPaper} alt="wallpaper" />
    </div>
  )
}

export default LMBox