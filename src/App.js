import React from 'react';
import './App.css';
import Nav from './components/nav/nav'
import Post from './components/post/post'

  
function App() {
  return (
    <div className="App" >
      <Nav />
      <Post />
      <header className="App-header" style={{marginTop:"200%"}}>
          Learn React
      </header>
    </div>
  );
}

export default App;
