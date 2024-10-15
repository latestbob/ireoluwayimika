import React from 'react';
import carousel2 from '../assets/carousel2.png'



const Carousel2 = ():JSX.Element => {
    return (
        <>

                <div className="block md:flex px-5 md:px-20 py-10 w-full min-h-[50vh] justify-center items-center bg-white">
                <div className="imagediv w-full md:w-[50%]">
                    <img src={carousel2} alt="" />
                </div>

                <div className="px-3 py-4 w-full md:w-2/5">
                    <h3 className="text-xl md:text-2xl font-semibold text py-2 mt-14 md:mt-0">We Decided to Live Together</h3>
                    <hr className='border-2 w-24 border-amber-500' />

                    <p className="text-justify mt-5">First, we prayed. Love was in the air, but conviction gave it a fresh breath.
                    We spent every day in constant communication. We talked more, but this time with intention. We examined everything, questioning and exploring every detail. Most importantly, we shared our hearts. As the days passed, we uncovered an alignment of purpose and fulfilment of prophecies. Our love was meant to be</p>

                        <br />
                    <p className="text-justify">It didn’t take long for us to know exactly what we wanted. We didn’t want to waste another moment. On April 1st, Adeyinka asked Ireoluwa to do life with him. She said a resounding "Yes," and here they are...</p>
                </div>

            </div>
        </>
    )
}

export default Carousel2;
