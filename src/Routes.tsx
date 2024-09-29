import React from 'react';
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';


const routes = [
    {
        id:1,
        path:'/',
        exact:true,
        auth:false,
        component:Home,
        pageTile:"The ÌrèolùwàYimika Experience"
    },

    {
        id:2,
        path:'/rsvp',
        exact:true,
        auth:false,
        component:Rsvp,
        pageTile:"Rsvp - The ÌrèolùwàYimika Experience"
    },
];



export default routes;