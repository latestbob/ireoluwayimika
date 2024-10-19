import React, { useState } from 'react';

import herosecondary from '../assets/heros.png'

import Carousel1 from './carousel1';
import Carousel2 from './carousel2';
import Carousel3 from './carousel3';
const LoveStory = ():JSX.Element => {


    const slides = [
        <Carousel1 />,
        <Carousel3 />,
        <Carousel2 />,
        
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };


    return (
        <>
              <section id='love-story' className='bg-white w-full min-h-[80vh] py-16 px-5'>
            <h1 className="text-center text-[#723526] text-xl md:text-3xl font-bold mt-10">Our Love Story</h1>
            <p className="text-base md:text-lg text-center font-base px-5 mt-3">There is only one happiness in this life, to love and be loved.</p>


                {/*  */}
                
                
                <div className="relative w-full">
      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
            key={index}
            className="min-w-full flex items-center justify-center"
          >
            {slide}
          </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute md:top-1/2 left-4 transform -translate-y-1/2 text-white bg-[#723526] px-4 py-2 rounded-full"
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute md:top-1/2 right-4 transform -translate-y-1/2 text-white bg-[#723526] px-4 py-2 rounded-full"
      >
        Next
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>










                {/*  */}
                
            </section>

           
           
        </>
    )
}

export default LoveStory;