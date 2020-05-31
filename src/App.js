import React, { useState, useEffect } from "react";
import "./App.css";

import Contact from "./components/contact/contact";
import Galleries from "./components/galleries/galleries";
import Snake from "./components/snake/snake";

function App() {
  const [playing, setPlaying] = useState(true);
  const [lastKey, setLastKeyCode] = useState(0);
  useEffect(() => {
    const gameContainer = document.getElementById("gameContainer");
    gameContainer.addEventListener("keydown", keyPush);
    function keyPush(evt) {
      // console.log(evt.keyCode);
      const keyCodes = [37, 38, 39, 40];
      if (keyCodes.includes(evt.keyCode)) {
        evt.preventDefault();
        setLastKeyCode(evt.keyCode);
      } else if (evt.keyCode === 27) {
        setPlaying(!playing);
      }
      console.log(playing);
    }
    console.log(lastKey);
  });
  return (
    <div className="App">
      <Snake lastKey={lastKey} playing={playing} />
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
