import React from 'react';
import HomeHeader from './HomeHeader'
import HomeOptions from './HomeOptions';
import HomeThreeColumns from './HomeThreeColumns';
import FourSteps from './FourSteps';
import AboutUs from './AboutUs';
import WhoWeHelp from './WhoWeHelp';
import Contact from './Contact';



const Home = () => {
    return (
        <>
        <HomeHeader />
        <HomeOptions />
        <HomeThreeColumns />
        <FourSteps />
        <AboutUs />
        <WhoWeHelp />
        <Contact />
        </>
    )
}

export default Home;