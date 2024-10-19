import React from 'react';

import {db} from '../firebase';
import { collection, getDocs, where, query, doc, setDoc,deleteDoc, addDoc, updateDoc } from "firebase/firestore";

import axios from 'axios';


export async function addRsvp(name:string, email:string, phone:string, event:string, additional?:string){

    try {

      // Query the 'rsvp' collection to check if the email already exists
      const q = query(collection(db, 'rsvp'), where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
          // If the email already exists, return an appropriate message
          return 'Email already exists';
      }




        const docRef = await addDoc(collection(db, 'rsvp'), {
            name: name,
            email: email,
            phone: phone,
            event:event,
            additional:additional,
            createdAt: new Date(),
          });
    
          console.log('Document written with ID: ', docRef.id);

          const response = await axios.post('https://weddingbackend-yx6n.onrender.com/api/send', {
            name:name,
            email:email
          });

          return 'RSVP added successfully';
    

    } catch (error:any) {
        throw new Error(error.message);
      
    }

}


// fetch Links from firestore




  

 





