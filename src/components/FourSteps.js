import React from "react";
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';
import {Link as Link} from 'react-router-dom'
import asset from "../assets/Decoration.svg"

const FourSteps = () => {
    return (
        <section className="four-steps-section">
            <div className="four-steps-header">
                <h1>Wystarczą cztery proste kroki!</h1>
                <img className="img" src={asset}/>
            </div>
            <div className="four-steps-text">
                <div className="four-steps-column">
                    <img src={icon1}/>
                    <p className="p-border">Wybierz rzeczy</p>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="four-steps-column">
                    <img src={icon2}/>
                    <p className="p-border">Spakuj je</p>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="four-steps-column">
                    <img src={icon3}/>
                    <p className="p-border">Zdecyduj komu chcesz pomóc</p>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="four-steps-column">
                    <img src={icon4}/>
                    <p className="p-border">Zamów kuriera</p>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="button-section-four-steps">
                <Link id="button-four-steps-link" to="/login"><button id="button-four-steps">ODDAJ RZECZY</button></Link>
            </div>
        </section>
    )
}



export default FourSteps;