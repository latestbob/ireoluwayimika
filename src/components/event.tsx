import React from 'react';
import events from '../assets/events.png'

const Event = ():JSX.Element => {

    return (
        <>
            <section className=" bg-green-400 w-full min-h-screen mt-10 bg-no-repeat"
            style={{ 
                backgroundImage: `url(${events})`,
                //  backgroundPosition:'right',
                // backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center', // Move to top-right corner
                backgroundSize: 'cover', // Optional: Adjust size if needed
                backgroundAttachment:'fixed',
               
                
                }}>
            
            
            </section>
        
        </>
    );
}

export default Event;