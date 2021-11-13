import React, {useState} from 'react';

const WhoWeHelp = () => {
    const [showText1, setShowText1] = useState(true);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);


    const onClick1 = () => {setShowText1(true); setShowText2(false); setShowText3(false);}
    const onClick2 = () => {setShowText1(false); setShowText2(true); setShowText3(false);}
    const onClick3 = () => {setShowText1(false); setShowText2(false); setShowText3(true);}

    
    return (
        <>
        <section id="who-we-help-section">
            <div className="who-we-help-header">
                <h1>Komu pomagamy?</h1>
                <button id="button1" onClick={onClick1} >Fundacjom</button>
                <button id="button2" onClick={onClick2} >Organizacjom pozarządowym</button>
                <button id="button3" onClick={onClick3} >Lokalnym zbiórkom</button>
                
            </div>
        </section>
        <div>
            {showText1 ? <Div1 /> :null}
            {showText2 ? <Div2 /> :null}
            {showText3 ? <Div3 /> :null}
        </div>
        </>
    )


}

const Div1 = () =>{
    return(
        <section id="div-section-1">
            <p>
               W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. 
               Możesz sprawdzić czym się zajmują, komu pomagają i
               czego potrzebują.
            </p>
            <div className="div-columns">
                <div className="column">
                    <div className="column-left">
                        <h3>Fundacja “Dbam o Zdrowie”</h3>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <div className="column-right">
                        <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>
                <div className="column">
                    <div className="column-left">
                        <h3>Fundacja “Dla dzieci”</h3>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="column-right">
                        <p>ubrania, meble, zabawki</p>
                    </div>
                </div>
                <div className="column">
                    <div className="column-left">
                        <h3>Fundacja “Bez domu”</h3>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania..</p>
                    </div>
                    <div className="column-right">
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
            </div>
        </section>
        
    )
}


const Div2 = () =>{
    return(
        <section id="div-section-2">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="div-columns">
                <div className="column">
                    <div className="column-left">
                        <h3>Organizacja “Lorem Ipsum 1”</h3>
                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    </div>
                    <div className="column-right">
                        <p>Egestas, sed, tempus</p>
                    </div>
                </div>
                <div className="column">
                    <div className="column-left">
                        <h3>Organizacja “Lorem Ipsum 2”</h3>
                        <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                    </div>
                    <div className="column-right">
                        <p>Ut, aliquam, purus, sit, amet</p>
                    </div>
                </div>
                <div className="column">
                    <div className="column-left">
                        <h3>Organizacja “Lorem Ipsum 3”</h3>
                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    <div className="column-right">
                        <p>Mi, quis, hendrerit, dolor</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Div3 = () =>{
    return(
        <section id="div-section-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="div-columns">
                <div className="column">
                    <div className="column-left">
                        <h3>Zbiórka “Lorem Ipsum 1”</h3>
                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    </div>
                    <div className="column-right">
                        <p>Egestas, sed, tempus</p>
                    </div>
                </div>
                <div className="column">
                    <div className="column-left">
                        <h3>Zbiórka “Lorem Ipsum 2”</h3>
                        <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                    </div>
                    <div className="column-right">
                        <p>Ut, aliquam, purus, sit, amet</p>
                    </div>
                </div>
                <div className="column">
                    <div className="column-left">
                        <h3>Zbiórka “Lorem Ipsum 3”</h3>
                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    <div className="column-right">
                        <p>Mi, quis, hendrerit, dolor</p>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default WhoWeHelp;