import React from 'react';
import AppRoute from './AppRoute';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (

      <>
        <Router>
            <AppRoute />
        </Router>
          
      </>
  );
}

export default App;
