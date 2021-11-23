import React from "react";
import {Link} from 'react-scroll';
import {Link as Rlink} from 'react-router-dom'

const HomeHeader = () => {
    return (
        <section className="start-section">
        <div className="login-div">
            <Rlink className="login" to="/login">Zaloguj</Rlink>
            <Rlink className="login" to="/register">Załóż konto</Rlink>
        </div>
        <div className="menu">
            <Rlink to="/" className="menu-option">Start</Rlink>
            <Link className="menu-option" to="three-columns" smooth={true} duration={1000}>O co chodzi?</Link>
            <Link className="menu-option" to="about-us-section" smooth={true} duration={1000}>O nas</Link>
            <Link className="menu-option" to="who-we-help-section" smooth={true} duration={1000}>Fundacje i organizacje</Link>
            <Link className="menu-option" to="contact-section"smooth={true} duration={1000}>Kontakt</Link>
        </div>
        </section>
    )
}

export default HomeHeader;