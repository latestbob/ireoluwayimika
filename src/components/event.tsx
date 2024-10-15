import React from 'react';
import events from '../assets/eventtwo.png'

const Event = ():JSX.Element => {

    return (
        <>
            <section id='event' className="w-full min-h-screen mt-10 bg-no-repeat py-20 px-10 "
            style={{ 
                backgroundImage: `url(${events})`,
                //  backgroundPosition:'right',
                // backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center', // Move to top-right corner
                backgroundSize: 'cover', // Optional: Adjust size if needed
                backgroundAttachment:'fixed',
               
                
                }}>

                <h1 className="text-center font-bold text-2xl md:text-3xl text-white"> THE WEDDING EVENT</h1>
              <p className=" text-base md:text-lg font-medium text-center text-white italic">If you have only one smile in you give it to the people you love.</p>
            


                <div className="block md:flex justify-between mt-20 space-y-12 md:space-y-0 md:space-x-8">

                    <div className="md:w-[30%]  shadow rounded bg-white min-h-[40vh] md:min-h-[60vh] py-8 px-10">
                        <h2 className="font-bold font-sans text-[#723526] text-xl md:text-2xl">ENGAGEMENT</h2>
                        <hr className='border-2 w-24 border-amber-500' />

                        <p className="text-normal py-3 text-[15px]">The enagagement ceremony will take place on December 21st at Youth Center,
                        Redemption City of God.</p>

                        

                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>

                            <div className="pl-5">
                                <p className="text-[14px]">Saturday - December 21st, 2024 <br />8:00am prompt
                                </p>
                            </div>
                        </div>

                        <div className="flex mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                            </svg>


                            <div className="pl-5">
                                <p className="text-[14px]">Youth Center, <br />Redemption City of God
                                </p>
                            </div>
                        </div>


                        <div className="text-center py-5 mt-5">

                        <a href="https://www.google.com/maps/dir//The+Redeemed+Christian+Church+Of+God,+National+Youth+Centre,+Expressway1,+Ofada+110113,+Ogun+State/@6.8263636,3.1779237,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x103bc6d3942dfed1:0xdfaf8e0c3c805441!2m2!1d3.4663065!2d6.8263886!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target='_blank' className="block w-full text-[16px] py-3 px-4 border-2 border-[#723526] text-[#723526] rounded-lg font-medium hover:bg-[#723526] hover:text-white">How To Get There</a>
                        </div>
                        
                    
                    </div>

                    {/* church service */}

                    <div className="md:w-[30%]  shadow rounded bg-white min-h-[40vh] md:min-h-[60vh] py-8 px-10">
                        <h2 className="font-bold font-sans text-[#723526] text-xl md:text-2xl">CHURCH SERVICE</h2>
                        <hr className='border-2 w-24 border-amber-500' />

                        <p className="text-normal py-3 text-[15px]">Church Service follows after engagement ceremony at Messiah's Praise Sanctuary(MPS)
                        Akindayomi Road, Redemption City</p>

                        

                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>

                            <div className="pl-5">
                                <p className="text-[14px]">Saturday - December 21st, 2024 <br />12:00pm prompt
                                </p>
                            </div>
                        </div>

                        <div className="flex mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                            </svg>

                            <div className="pl-5">
                                <p className="text-[14px]">Messiah's Praise Sanctuary(MPS) <br />Akindayomi Road, Redemption City
                                </p>
                            </div>
                        </div>


                        <div className="text-center py-5 mt-3">
                        
                        <a href="https://www.google.com/maps/dir//The+Redeemed+Christian+Church+Of+God,+Messiah+Praise+Sanctuary,+Redeemed+Christian+Church+of+God+Camp+Ground,+Pakuro+110113,+Ogun+State/@6.7611972,3.383362,12.53z/data=!4m9!4m8!1m0!1m5!1m1!1s0x103bc0d413ffffff:0xee3cbb9130cd51d0!2m2!1d3.45583!2d6.818441!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target='_blank' className="block w-full text-[16px] py-3 px-4 border-2 border-[#723526] text-[#723526] rounded-lg font-medium hover:bg-[#723526] hover:text-white">How To Get There</a>
                        </div>
                        
                    
                    </div>


                {/* reception */}


                <div className="md:w-[30%] shadow rounded bg-white min-h-[40vh] md:min-h-[60vh] py-8 px-10">
                        <h2 className="font-bold font-sans text-[#723526] text-xl md:text-2xl">THE RECEPTION</h2>
                        <hr className='border-2 w-24 border-amber-500' />

                        <p className="text-normal py-3 text-[15px]">The reception follows immediately after the church service. It will be a time of celebration, joy, and fellowship as we continue to share in the couple's special day.</p>

                       

                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>

                            <div className="pl-5">
                                <p className="text-[14px]">Reception follows after <br />church service
                                </p>
                            </div>
                        </div>

                        <div className="flex mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                            </svg>

                            <div className="pl-5">
                                <p className="text-[14px]">Youth Center, <br />Redemption City of God
                                </p>
                            </div>
                        </div>


                        <div className="text-center py-5 mt-5">

                            <a href="https://www.google.com/maps/dir//The+Redeemed+Christian+Church+Of+God,+National+Youth+Centre,+Expressway1,+Ofada+110113,+Ogun+State/@6.8263636,3.1779237,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x103bc6d3942dfed1:0xdfaf8e0c3c805441!2m2!1d3.4663065!2d6.8263886!3e0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target='_blank' className="block w-full text-[16px] py-3 px-4 border-2 border-[#723526] text-[#723526] rounded-lg font-medium hover:bg-[#723526] hover:text-white">How To Get There</a>
                        </div>
                        
                        
                    
                    </div>




                   

                </div>



            </section>
        
        </>
    );
}

export default Event;