import "./LogoStrip.css"
import data from "data/strip"
import uniqueId from "lodash.uniqueid"

const LogoStrip = () => {
    return (
        <div className="stripWrapper">
            <div className="cover"></div>
            <div className="logos">
                {[...data, ...data, ...data].map(e => <img key={uniqueId()} src={e.src} alt={e.alt} />)}
            </div>
        </div>
    )
}

export default LogoStrip