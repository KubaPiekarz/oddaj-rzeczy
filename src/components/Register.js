import React from "react";
import HomeHeader from "./HomeHeader";
import asset from "../assets/Decoration.svg";

const Register = ()=>{
    return(
        <>
            <HomeHeader/>
            <section className="login-section">
                <h1>Zarejestruj się</h1>
                <img className="img" src={asset}/>
                <div className="login-area">
                    <p>E-mail</p>
                    <input className="login-input" type="email"></input>
                    <p>Hasło</p>
                    <input className="login-input" type="password"></input>
                    <p>Powtórz hasło</p>
                    <input className="login-input" type="password"></input>
                </div>
                <div className="login-buttons">
                    <button className="login-button">Załóż konto</button>
                    <button className="login-button">Zaloguj się</button>
                </div>
            </section>
        </>
    )

}

export default Register;