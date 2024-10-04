import React from 'react';
import herotwo from '../assets/herotwo.jpg'
import bride from '../assets/bride.jpg'
import bridetwo from '../assets/bridetwo.jpg'
import groom from '../assets/groom.jpg'


const Couple = ():JSX.Element => {

    return (
        <>

            <section className='bg-white w-full min-h-[80vh] py-16 px-10 md:px-16'>
            <h1 className="text-center text-[#723526]  text-2xl md:text-3xl font-bold mt-10">Together by Faith, Forever in Love</h1>
            <p className=" text-base md:text-lg text-center font-base px-5 mt-3">The foundation of a joyful marriage is built on love, trust, and the art of forgiveness..</p>



                <div className="block md:flex bg-white min-h-[50vh] justify-between mt-10">

                    <div  className="flex flex-col items-center bg-white  md:flex-row md:hover:bg-[#feebdb] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-[80%] rounded-t-lg  md:h-auto hover:w-96 md:w-72  md:rounded-lg transition-all duration-500" src={bride} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-center md:text-left mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Groom</h5>
                            <p className="text-center md:text-left text-base font-medium text-[#723526]">What I See in Her</p>
                            <hr className='border-2 w-20 border-amber-500 m-auto md:m-0' />
                            <p className=" text-center text-sm mb-3 mt-3 md:text-justify font-normal italic text-gray-700 dark:text-gray-400">“Her worth is far above rubies” (Proverbs 31:10). In her, I see the beauty of God’s grace, a woman clothed in strength, wisdom, and dignity. She carries the light of faith in her heart and shares it through her kindness and love. Her love is a gift."</p>
                        </div>
                    </div>


                    <br className='block md:hidden' />

                    <div  className="flex flex-col items-center bg-white  md:flex-row  md:hover:bg-[#feebdb] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-[80%] rounded-t-lg  md:h-auto hover:w-96 md:w-72  md:rounded-lg transition-all duration-500" src={groom} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-center md:text-left mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Bride</h5>
                            
                            <p className="text-center md:text-left text-base font-medium text-[#723526]">What I See in Him</p>
                            <hr className='border-2 w-20 border-amber-500 m-auto md:m-0' />
                            <p className="text-sm text-center md:text-justify mb-3 mt-3 font-normal italic text-gray-700 dark:text-gray-400">“He is like a tree planted by streams of water, which yields its fruit in season” (Psalm 1:3). In him, I see the steadfastness of God’s love, a man rooted in faith, strength, and humility. He walks in integrity, a reflection of the Lord’s everlasting care."</p>
                        </div>
                    </div>

                </div>
            </section>
        
        </>
    );
    
}

export default Couple;