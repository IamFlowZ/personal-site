import React, { useState, useEffect } from "react";
import "./App.css";

import Contact from "./components/contact/contact";
import Galleries from "./components/galleries/galleries";
import Snake from "./components/snake/snake";

function App() {
  return (
    <div className="App">
      <Snake />
      <div
        style={{
          width: "50vw",
          borderLeft: "5px solid white",
          display: "flex",
          flexFlow: "wrap",
        }}
      >
        <Contact />
        <Galleries />
      </div>
    </div>
  );
}

export default App;
