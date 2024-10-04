import React from 'react';
import heroimage from '../assets/hero.png'
import ment from '../assets/ment.png'
import herosecondary from '../assets/heros.png'

const Hero = ():JSX.Element => {
    
    return (
        <>

            <section className="bg-no-repeat h-screen mt-20 flex items-center px-10 md:px-24 backdrop-blur-md"  
            style={{ 
                backgroundImage: `url(${heroimage})`,
                //  backgroundPosition:'right',
                // backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center', // Move to top-right corner
                backgroundSize: 'cover', // Optional: Adjust size if needed
               
                
                }}>


                    <div className="w-full md:w-[38%] min-h-[80vh] bg-[#fefefe] rounded-lg overflow-hidden pb-5">
                        
                            <img src={ment} className='w-full h-14 ' alt="" />

                            <h3 className="text-center text-[#723526] text-xl md:text-2xl font-semibold font-sans">Together with Their Families</h3>


                        <div className="imagediv">
                            <img src={herosecondary} className='' alt="" />
                        </div>


                        <h1 className="text-center text-[#723526] text-2xl md:text-3xl font-bold">Ireoluwa & Adeyinka</h1>
                        <p className=" text-base md:text-lg text-center font-base px-5 mt-3">Request the honor of your presence at their wedding ceremony and reception.</p>
                    </div>

            </section>
        
        </>
    )
}

export default Hero;