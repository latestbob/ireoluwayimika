import React from 'react';
import herotwo from '../assets/herotwo.jpg'
import bride from '../assets/bride.jpg'
import bridetwo from '../assets/bridetwo.jpg'
import groom from '../assets/groom.png'


const Couple = ():JSX.Element => {

    return (
        <>

            <section  className='bg-white w-full min-h-[80vh] py-16 px-5 md:px-16'>
            <h1 className="text-center text-[#723526]  text-xl md:text-3xl font-bold mt-10">Together by Faith, Forever in Love</h1>
            <p className=" text-base md:text-lg text-center font-base px-5 mt-3">The foundation of a joyful marriage is built on love, trust, and the art of forgiveness..</p>



                <div className="block md:flex bg-white min-h-[50vh] justify-between mt-10 md:space-x-10">

                    <div  className="flex flex-col items-center bg-white  md:flex-row   md:w-1/2">
                        <img className="object-cover w-[80%] rounded-t-lg  md:h-auto hover:w-96 md:w-72  md:rounded-lg transition-all duration-500" src={bride} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-center md:text-left mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 ">The Groom</h5>
                            <p className="text-center md:text-left text-base font-medium text-[#723526]">WHAT I SEE IN HER</p>
                            <hr className='border-2 w-20 border-amber-500 m-auto md:m-0' />
                            <p className=" text-center text-sm mb-3 mt-3 md:text-justify font-normal italic text-gray-700 ">
                            "But let it be the hidden man of the heart, in that which is not corruptible, even the ornament of a meek and quiet spirit, which is in the sight of God of great price." (1 Peter 3:4). In her, I see beyond beauty beyond the physical, I see a woman clothed with a meek and quiet spirit, whose beauty is the glory of the LORD, whose speech is always found to be with grace and  chaste drawing strength from the fear of the LORD. 
                            
                            {/* She exudes a depth of knowledge of God through a daily living filled with faith, love, kindness and joy. Her heart is a rare gift. */}
                            </p>
                        </div>
                    </div>


                    <br className='block md:hidden' />

                    <div  className="flex flex-col items-center bg-white  md:flex-row  md:w-1/2">
                        <img className="object-cover w-[80%] rounded-t-lg  md:h-auto hover:w-96 md:w-72  md:rounded-lg transition-all duration-500" src={groom} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-center md:text-left mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 ">The Bride</h5>
                            
                            <p className="text-center md:text-left text-base font-medium text-[#723526]">WHAT I SEE IN HIM</p>
                            <hr className='border-2 w-20 border-amber-500 m-auto md:m-0' />
                            <p className="text-sm text-center md:text-justify mb-3 mt-3 font-normal italic text-gray-700 ">
                            "He is like a tree planted by streams of water, bearing fruit in its season." Psalm 1:3.
                            In him, I see passion, strength, a kind heart, and a kindred spirit. I see a love that never fades and loyalty that holds fast. His steps are quickened in the pursuit of Christ and His Church. A handsome man with beautiful eyes, and a contagious smile.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        
        </>
    );
    
}

export default Couple;