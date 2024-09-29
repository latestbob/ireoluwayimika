import React from 'react';
import maintain from '../assets/maintain.svg';
import Nav from '../components/nav';
import Hero from '../components/hero';
import Couple from '../components/couple';
import Event from '../components/event';
const Home = ():JSX.Element => {

    return (
        <>

            {/* navbar here */}
                <Nav />

            {/* end of navbar */}


            {/* hero */}
                <Hero />
            {/* end of hero */}

            {/* couple  */}
            <Couple />
            {/* end of couple */}

            {/* event */}
                <Event />

            {/* end of event */}
            <Couple />
            
        </>
    );
}


export default Home;