import React from "react";
import aboutUsIMG from '../assets/People.jpg'
import signature from '../assets/Signature.svg'

const AboutUs = () => {
    return (
        <section id="about-us-section">
            <div className="about-us-text">
                <h1>O nas</h1>
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato 
                    quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img src={signature} />
            </div>
            <div className="about-us-img">
                <img src={aboutUsIMG} />
            </div>
        </section>
    )
}



export default AboutUs;