const Feature = ({ src, title, description }) => {
  return (
    <div className='featureWrapper'>
        <div className="imgWrapper">
          <img src={src} alt="dedicated visual" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Feature