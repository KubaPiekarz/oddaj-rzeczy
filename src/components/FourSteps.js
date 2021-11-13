import React from "react";
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';
import {Link as Link} from 'react-router-dom'

const FourSteps = () => {
    return (
        <section className="four-steps-section">
        <div className="four-steps-header">
            <h1>Wystarczą cztery proste kroki!</h1>
        </div>
        <div className="four-steps-text">
            <div className="four-steps-column">
                <p>Wybierz rzeczy</p>
                <img src={icon1}/>
                <p>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className="four-steps-column">
                <p>Spakuj je</p>
                <img src={icon2}/>
                <p>skorzystaj z worków na śmieci</p>
            </div>
            <div className="four-steps-column">
                <p>Zdecyduj komu chcesz pomóc</p>
                <img src={icon3}/>
                <p>wybierz zaufane miejsce</p>
            </div>
            <div className="four-steps-column">
                <p>Zamów kuriera</p>
                <img src={icon4}/>
                <p>kurier przyjedzie w dogodnym terminie</p>
            </div>
        </div>
        <Link to="/login"><button className="four-steps-button">ODDAJ RZECZY</button></Link>
        </section>
    )
}



export default FourSteps;