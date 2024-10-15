import React from 'react';
import carousel3 from '../assets/carousel3.png'



const Carousel3 = ():JSX.Element => {
    return (
        <>

                <div className="block md:flex px-5 md:px-20 py-10 w-full min-h-[50vh] justify-center items-center bg-white">
                <div className="imagediv w-full md:w-[50%]">
                    <img src={carousel3} alt="" />
                </div>

                <div className="px-3 py-4 w-full md:w-2/5">
                    <h3 className="text-xl md:text-2xl font-semibold text py-2 mt-14 md:mt-0">When We Met</h3>
                    <hr className='border-2 w-24 border-amber-500' />

                    <p className="text-justify mt-5">That Sunday morning, I took my time getting dressed. It was my first time meeting the man who had made me laugh the hardest and longest, so I wanted to look my best. Why? I wasn’t sure, but something about him made me want to try harder.</p>

                        <br />
                    <p className="text-justify">When I saw him for the first time, I couldn’t help but smile from ear to ear. Unsure of how to react, I asked for a hug. He smiled and obliged.
We had a wonderful church service and spent the rest of the day together. It was an amazing day. 
As I drove home that evening, I knew I needed to have a serious talk with my Heavenly Father.</p>
                </div>

            </div>
        </>
    )
}

export default Carousel3;
