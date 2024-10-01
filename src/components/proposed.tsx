import React from 'react';
import events from '../assets/proposed2.png'
import ment from '../assets/ment.png'

const Proposed = ():JSX.Element => {

    return (
        <>
            <section className="w-full min-h-screen mt-10 bg-no-repeat py-20 px-24 "
            style={{ 
                backgroundImage: `url(${events})`,
                //  backgroundPosition:'right',
                // backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'bottom', // Move to top-right corner
                backgroundSize: 'contain', // Optional: Adjust size if needed
                backgroundAttachment:'fixed',
               
                
                }}>

               
            


                <div className="flex justify-between mt-20 space-x-8">

                    <div className=" overflow-hidden shadow rounded w-[40%] bg-white min-h-[60vh]">
                        <img src={ment} className='w-full h-14 ' alt="" />
                        
                        <div className="px-10 py-8">
                        <h2 className="font-bold font-sans text-[#723526] text-2xl">How He Proposed</h2>
                        <hr className='border-2 w-24 border-amber-500' />

                        <p className="text-normal py-3 text-base">He proposed on a Scrabble board. It's a game we've always loved.</p>


                        <p className="text-normal py-3 text-base">He glued the letters on, spelling "MILEA WILL YOU MARRY ME", and then asked if I wanted to play the game after dinner. He had me set up the game, and of course when I opened the board, I saw the letters spelling out the proposal!</p>
                        

                        <p className="text-normal py-3 text-base">I was so awestruck, confused and surprised at the same time as he stood there ring in hand. I framed the board and have it hanging in our home.</p>

                    


                        <br />

                        <p className="text-xl font-medium italic">"Yes! Yes of course! Yes!"

</p>
                        
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