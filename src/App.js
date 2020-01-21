import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from './components/nav'

  
function App() {
  return (
    <div className="App" >
      <Nav />
      <header className="App-header" style={{marginTop:"200%"}}>
          Learn React
      </header>
    </div>
  );
}

export default App;
