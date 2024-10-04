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
               
                    <h3 className="text-xl md:text-2xl font-semibold text py-2 mt-14 md:mt-0">How We Knew Each Other</h3>
                    <hr className='border-2 w-24 border-amber-500' />

                    <p className="text-justify mt-5">Milea and Dilan met the modern way: by swiping right on Tinder in 2021. Their first date was a bit of a disaster-it started pouring while they were enjoying their outdoor dinner, Dilan fell into a mud puddle, and they had to wait over an hour for a subway train. However, their second date went much better and they've been together ever since.</p>

                        <br />
                    <p className="text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>

            </div>
        </>
    )
}

export default Carousel1;
