import React, { useState } from 'react';

import herosecondary from '../assets/heros.png'
import inverter from '../assets/inverter2.png'
import washing from '../assets/washing.png'
import freezer from '../assets/freezer.png'
import micro from '../assets/micro2.png'
import sand from '../assets/sand.png'
import air from '../assets/air2.png'
import food from '../assets/food2.png'
import heavy from '../assets/heavy2.png'
import vacum from '../assets/vacum2.png'
import car from '../assets/car.png'

import carousel2 from '../assets/carousel2.png'

const WishList = ():JSX.Element => {


   
      const [selected, setSelected] = useState(0);

      const wishlistItems = [
        { name: 'Inverter', image: inverter },
        { name: 'Washing Machine', image: washing },
        { name: 'Freezer', image: freezer },
        { name: 'Microwave', image: micro },
        { name: 'Air Fryer', image: air },
        { name: '6 in 1 Sandwich Maker', image: sand },
        { name: 'Food Processor', image: food },
        { name: 'Heavy-Duty Blender', image: heavy },
        { name: 'Oraimo Vacuum Cleaner', image: vacum },
        { name: 'Car', image: car },
      ];
    

    return (
        <>
              <section id="wish-list" className='bg-white w-full min-h-[80vh] py-16 px-5'>
            <h1 className="text-center text-[#723526] text-xl md:text-3xl font-bold mt-10">Our Wish List</h1>
            {/* <p className="text-base md:text-lg text-center font-base px-5 mt-3">There is only one happiness in this life, to love and be loved.</p> */}


                {/*  */}


                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-10">
        {wishlistItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 md:h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium md:text-lg md:font-semibold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
                
       









                {/*  */}
                
            </section>

           
           
        </>
    )
}

export default WishList;