import React from 'react';
import events from '../assets/proposed2.png'
import ment from '../assets/ment.png'

const Proposed = ():JSX.Element => {

    return (
        <>
            <section className="w-full min-h-screen mt-10 bg-no-repeat py-10 md:py-20 px-5 md:px-24 "
            style={{ 
                backgroundImage: `url(${events})`,
                //  backgroundPosition:'right',
                // backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center center', // Move to top-right corner
                backgroundSize: 'cover', // Optional: Adjust size if needed
                backgroundAttachment:'fixed',
               
                
                }}>

               
            


                <div className="flex justify-between mt-20 space-x-8">

                    <div className=" overflow-hidden shadow rounded w-[95%] md:w-[45%] bg-white min-h-[60vh]">
                        <img src={ment} className='w-full h-14 ' alt="" />
                        
                        <div className="px-10 py-8">
                        <h2 className="font-bold font-sans text-[#723526] text-xl md:text-2xl">How He Proposed</h2>
                        <hr className='border-2 w-24 border-amber-500' />

                        <p className="text-normal py-3 text-base">He approached me with certainty and boldness, knowing exactly what he wanted and unafraid to ask for it. He had hinted at his intentions throughout our early conversations—Adeyinka is not one to hide his heart. His plan was clear: he would go on a 3-day personal retreat, and when he returned, he would ask for my hand. So, I waited.</p>


                        <p className="text-normal py-3 text-base">During that time, I searched my spirit deeply and had my answer ready. On April 1st, at midnight, he sent three versions of a beautifully detailed message to every platform we had ever communicated on. It was the sweetest gesture, and my heart leapt as I soaked in every word. Adeyinka's way with words is incomparable. The combination of my conviction and his intentionality won me over. <b><i>I said YES.</i></b></p>
                        

                        <p className="text-normal py-3 text-base">Later, he “put a ring on it” and I got to hear a fourth version of the sweetest words from the sweetest man.</p>

                    


           
                        
                        </div>
                    </div>

                    {/* church service */}

                


                {/* reception */}


             



                   

                </div>



            </section>
        
        </>
    );
}

export default Proposed;