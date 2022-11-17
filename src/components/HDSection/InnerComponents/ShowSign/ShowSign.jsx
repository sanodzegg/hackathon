import "./ShowSign.css"

const ShowSign = ({ active }) => {
  return (
    <div className='showSignWrapper'>
        <div className={`folder${active ? ' active' : ''}`}></div>
        <div className="dash"></div>
    </div>
  )
}

export default ShowSign