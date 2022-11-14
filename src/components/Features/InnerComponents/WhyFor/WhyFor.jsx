import MainButton from "components/Buttons/Main/MainButton"
import SecondaryButton from "components/Buttons/Secondary/SecondaryButton"
import Dots from "./Dots"

const WhyFor = () => {
  return (
    <div className='wfWrapper'>
        <Dots />
        <div className="col">
            <div className="colwr">
                <h3>Why is this extension for you?</h3>
                <p>Champ will inform you about every possible threat and make your internet activity inaccessible for third parties.</p>
            </div>
            <div className="colwr">
                <MainButton text="Get Started" />
                <SecondaryButton text="More Features" />
            </div>
        </div>
    </div>
  )
}

export default WhyFor