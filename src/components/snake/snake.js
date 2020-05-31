import React, { useState, useEffect } from "react";

const gridSize = 20;

function getRandomPosition() {
  return Math.floor(Math.random() * gridSize);
}

function Player({ ctx, playerState, lastKey }) {
  playerState.xPosition += playerState.xVelocity;
  playerState.yPosition += playerState.yVelocity;
  if (playerState.xPosition < 0) {
    playerState.xPosition = gridSize - 1;
  }
  if (playerState.xPosition > gridSize - 1) {
    playerState.xPosition = 0;
  }
  if (playerState.yPosition < 0) {
    playerState.yPosition = gridSize - 1;
  }
  if (playerState.yPosition > gridSize - 1) {
    playerState.yPosition = 0;
  }
  console.log(lastKey);
  if (lastKey === 37) {
    playerState.xVelocity = -1;
    playerState.yVelocity = 0;
  } else if (lastKey === 38) {
    playerState.xVelocity = 0;
    playerState.yVelocity = -1;
  } else if (lastKey === 39) {
    playerState.xVelocity = 1;
    playerState.yVelocity = 0;
  } else if (lastKey === 40) {
    playerState.xVelocity = 0;
    playerState.yVelocity = 1;
  }
  // switch (lastKey) {
  //   case 37: // left
  //     playerState.xVelocity = -1;
  //     playerState.yVelocity = 0;
  //     break;
  //   case 38: // down
  //     playerState.xVelocity = 0;
  //     playerState.yVelocity = -1;
  //     break;
  //   case 39: // right
  //     playerState.xVelocity = 1;
  //     playerState.yVelocity = 0;
  //     break;
  //   case 40: // up
  //     playerState.xVelocity = 0;
  //     playerState.yVelocity = 1;
  //     break;
  //   default:
  //     break;
  // }
  console.log(playerState);
  ctx.fillStyle = "lime";
  playerState.trail.map((trailItem) => {
    ctx.fillRect(
      trailItem.x * gridSize,
      trailItem.y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
  });
  playerState.trail.push({
    x: playerState.xPosition,
    y: playerState.yPosition,
  });
  while (playerState.trail.length > playerState.tail) {
    playerState.trail.shift();
  }
  return playerState;
}

function Apple({ ctx, appleState }) {
  ctx.fillStyle = "red";
  ctx.fillRect(
    appleState.xPosition * gridSize,
    appleState.yPosition * gridSize,
    gridSize - 2,
    gridSize - 2
  );
}

export default function Snake({ lastKey, playing }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  let [score, setScore] = useState(0);
  const [statusText, setStatusText] = useState("Paused!!");
  const [playerState, setPlayerState] = useState({
    xVelocity: 0,
    xPosition: 10,
    yPosition: 10,
    yVelocity: 1,
    trail: [],
    tail: 5,
  });
  const [appleState, setAppleState] = useState({
    xPosition: 10,
    yPosition: 10,
  });

  useEffect(() => {
    const gameCanvas = document.getElementById("gameCanvas");
    const ctx = gameCanvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    function doStuff() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
      if (
        playerState.xPosition === appleState.xPosition &&
        playerState.yPosition === appleState.yPosition
      ) {
        // setScore(score++);
        setAppleState({
          xPosition: getRandomPosition(),
          yPosition: getRandomPosition(),
        });
      }
      Apple({ ctx, appleState });
      setPlayerState(Player({ ctx, playerState, lastKey }));
    }
    const interval = setInterval(doStuff, 1000 / 15);
    if (!playing) {
      clearInterval(interval);
    }
  }, []);

  return (
    <div
      id="gameContainer"
      tabIndex="0"
      style={{
        width: "50vw",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "50vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <canvas id="gameCanvas" width="400" height="400"></canvas>
        <h1 style={{ color: "white" }}>{statusText}</h1>
        <h2>Score: {score}</h2>
      </div>
    </div>
  );
}
