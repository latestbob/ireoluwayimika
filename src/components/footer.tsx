import React from 'react';
import last from '../assets/gallery/six.jpg'

const Footer = ():JSX.Element => {

    return (
        <>
            <section className="w-full min-h-[30vh] md:min-h-[40vh] mt-10 bg-no-repeat py-20 px-10 md:px-24 flex flex-col justify-center items-center "
            style={{ 
                backgroundImage: `url(${last})`,
                //  backgroundPosition:'right',
                // backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center', // Move to top-right corner
                backgroundSize: 'cover', // Optional: Adjust size if needed
                backgroundAttachment:'fixed',
               
                
                }}>

               
            


<h1 className="text-center font-bold text-2xl md:text-4xl text-white"> We Can't Wait to See You!</h1>
<p className="text-base md:text-xl font-medium text-center text-white italic">December, 21st 2024 | The ÌrèolùwàYimika Experience</p>



            </section>
        
        </>
    );
}

export default Footer;