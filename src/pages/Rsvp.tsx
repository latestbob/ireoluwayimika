import React, { ReactElement } from 'react';
import maintain from '../assets/maintain.svg';
import real from '../assets/rsvp.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRsvp } from '../services/firebaseService';
import { Bounce, toast } from 'react-toastify';

const Rsvp = ():JSX.Element => {

const[name, setName] = useState<string>("");
const[email, setEmail] = useState<string>("");
const[phone, setPhone] = useState<string>("");
const[event, setEvent] = useState<string>("");
const[additional, setAdditional] = useState<string>("");
const[loading, setLoading] = useState<boolean>(false);

const navigate = useNavigate();


async function handleSubmit(e:React.FormEvent){
  e.preventDefault();

 

  setLoading(true)

   try {
     await addRsvp(name, email, phone, event, additional);

     setLoading(false)
     navigate('/');
     toast.success('RSVP received! See you at The ÌrèolùwàYimika Experience!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });


   } catch (err:any) {
    setLoading(false)
    alert(err.message)
   }
}


    return (
        <>
        

<div className="bg-white flex justify-center items-center h-screen">

<div className="w-1/2 h-screen hidden lg:block">
  <img src={real} alt="Placeholder Image" className="object-cover w-full h-full"/>
</div>

<div className= "px-10 w-full md:w-1/2">
  <h1 className="text-4xl font-semibold mb-2">Come Celebrate with Us!
  </h1>

  <p className="mb-4">Every love story is beautiful, but ours is my favorite.</p>
 

  <form onSubmit={handleSubmit} className="space-y-4">

<div className="flex gap-4">
  <div className="w-1/2">
  <br />
  <label className=" text-gray-800 font-bold text-base">Name</label>
    <input type="text" onChange={function(e:React.ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }}  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"autoComplete='off'required />
  </div>

  <div className="w-1/2">
  <br />
    <label className=" text-gray-800  font-bold text-base">Email</label>
    <input type="email"onChange={function(e:React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value);
    }}  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"autoComplete='off'required />
  </div>
</div>


<div className="flex gap-4">
  <div className="w-1/2">
 
  <label className=" text-gray-800 font-bold text-base">Phone</label>
    <input type="tel"onChange={function(e:React.ChangeEvent<HTMLInputElement>){
        setPhone(e.target.value);
    }}   className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"autoComplete='off'required />
  </div>

  <div className="w-1/2">
 
    <label className=" text-gray-800  font-bold text-base">Events</label>
    <select onChange={function(e:React.ChangeEvent<HTMLSelectElement>){
      setEvent(e.target.value)
    }}  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Please Select</option>
    <option value="Ceremony & Reception">Ceremony & Reception</option>
    <option value="Ceremony Only">Ceremony Only</option>
    <option value="Reception Only">Reception Only</option>
    <option value="Sorry, Can't Make Either">Sorry, Can't Make Either</option>
  </select>
  </div>
</div>


<div className="">
  <div className="w-full">
 
  <label className=" text-gray-800 font-bold text-base">Additional Information</label>
  <textarea 
      rows={5} 
      placeholder="E.g. Vegetarian Requests" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-white" 
      autoComplete='off'>
  </textarea>
  </div>

  
</div>

<div className="mt-6 text-gray-600 text-center">
    <p className="hover:text-[#723526]">Please RSVP by November 21, 2024.

</p>
</div>
<div>
  <button type="submit" className="bg-[#723526] hover:bg-black text-white font-semibold rounded-md py-2 px-4 w-full">{loading ? 'LOADING....' : 'RSVP NOW'}</button>
</div>

</form>



  <div className="mt-6  text-center">
    <Link to ='/'className="text-[#723526] font-medium hover:cursor-pointer">Our Love Story

</Link>
  </div>
</div>
</div>
        </>
    );
}


export default Rsvp;