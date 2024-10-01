import React from 'react';
import maintain from '../assets/maintain.svg';
import Nav from '../components/nav';
import Hero from '../components/hero';
import Couple from '../components/couple';
import Event from '../components/event';
import Love from '../components/lovestory';
import Proposed from '../components/proposed';
import Gallery from '../components/gallery';


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
            

            {/* Love Story */}
            <Love />

            {/* end of love story */}

            {/* proposed */}
            <Proposed />

            {/* Gallery */}

            <Gallery />


            
        </>
    );
}


export default Home;