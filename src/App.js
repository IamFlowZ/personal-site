import React, { useEffect } from "react";
import "./App.css";

import Contact from "./components/contact/contact";
import Galleries from "./components/galleries/galleries";
import Snake from "./components/snake/snake";

function keyPush(evt) {
  console.log(evt.keyCode);
  const keyCodes = [27, 37, 38, 39, 40];
  if (keyCodes.includes(evt.keyCode)) {
    evt.preventDefault();
    return evt.keyCode;
  }
  // switch (evt.keyCode) {
  //   case 27: // esc
  //     playing = !playing;
  //     break;
  //   case 37: // left
  //     setXVelocity(1);
  //     setYVelocity(0);
  //     break;
  //   case 38: // down
  //     setXVelocity(0);
  //     setYVelocity(1);
  //     break;
  //   case 39: // right
  //     setXVelocity(1);
  //     setYVelocity(0);
  //     break;
  //   case 40: // up
  //     setXVelocity(0);
  //     setYVelocity(1);
  //     break;
  // }
}

function App() {
  useEffect(() => {
    const gameContainer = document.getElementById("gameContainer");
    gameContainer.addEventListener("keydown", keyPush);
  });
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
