import React from 'react';
import './App.css';

import Contact from './components/contact/contact'
import Gallery from './components/gallery/gallery'

function App() {
  return (
    <div className="App" >
      <div style={{height:"15vh", width: "100%"}} ></div>
      <Contact/>
      <Gallery/>
    </div>
  );
}

export default App;
