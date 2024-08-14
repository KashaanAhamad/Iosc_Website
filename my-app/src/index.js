import React from 'react';
import ReactDOM from 'react-dom/client';

/*import App from './App';*/
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* (<App />)*/}
    <NavBar />
    <Hero/>
  </React.StrictMode>
);


