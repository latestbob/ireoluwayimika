import React from 'react';
import maintain from '../assets/maintain.svg';
const Rsvp = ():JSX.Element => {

    return (
        <>
        
            <section className='w-full h-screen bg-[#feebdb] flex flex-col justify-center items-center relative'>


                <img src={maintain} className='w-3/4 md:w-2/5' />

                <h3 className="text-lg md:text-4xl font-sans font-bold py-5 text-[#723526] space-x-2">Website under maintenance!</h3>

                <p className="text-sm text-center md:text-lg font-sans font-medium text-[#723526] mx-4">💍💍 We’ll be back shortly, and we can't wait to have you RSVP to join our celebration! 💍💍</p>


                <div className="fixed bottom-0 left-0 w-full bg-[#723526] text-white py-3">
                
                    <p className="text-center text-sm md:text-base">The ÌrèolùwàYimika Experience</p>
                </div>
            </section>
        </>
    );
}


export default Rsvp;