import React from "react";
import asset from "../assets/Decoration.svg"

const HomeOptions = () => {
    return (
        <section className="home-menu">
        <div className="home-text">
            <h1>Zacznij pomagać!</h1>
            <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <img className="img" src={asset}/>
        </div>
        <div className="home-buttons">
            <button id="button-home">ODDAJ<br/> RZECZY</button>
            <button id="button-home">ZORGANIZUJ<br/> ZBIÓRKĘ</button>
        </div>
        </section>
    )
}



export default HomeOptions;