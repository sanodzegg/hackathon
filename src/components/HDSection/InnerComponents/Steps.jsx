import { useState } from 'react';
import ShowSign from './ShowSign/ShowSign'

const Steps = ({ icon, step, description }) => {
    const [active, setActive] = useState(false);
    return (
        <div className={`stepsWrapper${active ? ' active' : ''}`} onClick={() => setActive(!active)}>
            <div className='row'>
                <div className={`iconWrapper${active ? ' active' : ''}`}>
                    <img src={icon} alt="relative icon" />
                </div>
                <h4>{step}</h4>
                <ShowSign active={active} />
            </div>
            { description.includes("transfer") ? <a href="/extension">{description}</a> : <p>{description}</p> }
        </div>
    )
}

export default Steps