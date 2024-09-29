import React from 'react';
import routes from './Routes';
import { useState, useEffect } from 'react';

import { useLocation , Routes, Route} from 'react-router-dom';

const AppRoute = ():JSX.Element => {


    const location = useLocation();
  

    
     
    useEffect(() => {

        const currentRoute = routes.find(route => route.path === location.pathname);


        if(currentRoute && currentRoute.path){
            document.title = currentRoute.pageTile;
        }

    }, [location.pathname]);



    return (
        <>
             <Routes>
                {routes.map(({ id, path, component: Component, auth }) => {
                    // const isAuthenticated = currentUser !== null;
                    
                    // if (auth && !isAuthenticated) {
                    // // Redirect to login if authentication is required and user is not authenticated
                    // return <Route key={id} path={path} element={<Navigate to="/login" state={{ from: location }} replace />} />;
                    // }

                    // Render component if authentication is not required or user is authenticated
                    return <Route key={id} path={path} element={<Component />} />;
                })}
                </Routes>
        </>
    );
}


export default AppRoute;