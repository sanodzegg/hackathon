import MainButton from "components/Buttons/Main/MainButton"
import SecondaryButton from "components/Buttons/Secondary/SecondaryButton"

const HeroButtons = () => {
  return (
    <div className='heroButtonsWrapper'>
      <MainButton text="Get CHAMP" />
      <SecondaryButton text="Learn More" />
    </div>
  )
}

export default HeroButtons