import React from 'react';
import AppRoute from './AppRoute';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (

      <>
        <Router>
            <AppRoute />
        </Router>

        <ToastContainer />
          
      </>
  );
}

export default App;
