import React from 'react';
import one from '../assets/gallery/one.jpg'
import two from '../assets/gallery/two.jpg'
import three from '../assets/gallery/three.jpg'
import four from '../assets/gallery/four.jpg'
import five from '../assets/gallery/five.jpg'
import six from '../assets/gallery/six.jpg'
import seven from '../assets/gallery/seven.jpg'
import eight from '../assets/gallery/eight.jpg'
import nine from '../assets/gallery/nine.jpg'
import ten from '../assets/gallery/ten.jpg'
import eleven from '../assets/gallery/eleven.jpg'
import twelve from '../assets/gallery/twelve.jpg'


const Gallery = ():JSX.Element => {
    
    return (
        <>
        <section className='bg-white w-full min-h-[80vh] py-16 px-10 md:px-16'>
           
        <h1 className="text-center text-[#723526] text-2xl md:text-3xl font-bold mt-10">PHOTO GALLERY</h1>
        <p className="text-base md:text-lg text-center font-base px-5 mt-3">May you live as long as you wish and love as long as you live.</p>

            {/* gallery */}



<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={one} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={two} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={three} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={four} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={five} alt=""/>        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={six} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={seven} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={eight} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={nine} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={ten} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={eleven} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={twelve} alt=""/>
        </div>
    </div>
</div>

               
            </section>

        </>
    )
}


export default Gallery;