import React from 'react';
import carousel1 from '../assets/carousel1.png'



const Carousel1 = ():JSX.Element => {
    return (
        <>

                <div className="block md:flex px-5 md:px-20 py-10 w-full min-h-[50vh] justify-center items-center bg-white">
                <div className="imagediv w-full md:w-[50%]">
                    <img src={carousel1} alt="" />
                </div>

                <div className="px-3 py-4 w-full  md:w-2/5">
               
                    <h3 className="text-xl md:text-2xl font-semibold text py-2 mt-14 md:mt-0">How We knew Each other</h3>
                    <hr className='border-2 w-24 border-amber-500' />

                    <p className="text-justify mt-5">I met Ìrèolùwà through a mutual friend, Folusho. I was very hesitant about the "link-up" that 1 turned down several offers to be linked with Ìrè. 
                    On a faithful afternoon, after posting on my WhatsApp status, Folusho message me again, but this time with Ìrè's picture and a perfect capture.</p>

                        <br />
                    <p className="text-justify">I responded with a laughing emoji (the chat might be displayed during the wedding, so come 😃☺️🤣), and I told him to ask her for the green light to share her contact. I called her that same night and we had a long call of over three hours; right there, I knew this will be something special. Over the course of a fortnight, we talked long and deep, then we decided to meet.</p>
                </div>

            </div>
        </>
    )
}

export default Carousel1;
