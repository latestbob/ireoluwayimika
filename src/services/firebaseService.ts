import React from 'react';

import {db} from '../firebase';
import { collection, getDocs, where, query, doc, setDoc,deleteDoc, addDoc, updateDoc } from "firebase/firestore";




export async function addRsvp(name:string, email:string, phone:string, event:string, additional?:string){

    try {
        const docRef = await addDoc(collection(db, 'rsvp'), {
            name: name,
            email: email,
            phone: phone,
            event:event,
            additional:additional,
            createdAt: new Date(),
          });
    
          console.log('Document written with ID: ', docRef.id);
    

    } catch (error:any) {
        throw new Error(error.message);
      
    }

}


// fetch Links from firestore




  

 





