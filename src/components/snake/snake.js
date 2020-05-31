import React, { useState, useEffect } from "react";

const gridSize = 20;

function getRandomPosition() {
  return Math.floor(Math.random() * gridSize);
}

function Player({ ctx, playerState, lastKey, intersected }) {
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

  if (intersected) playerState.tail++;

  ctx.fillStyle = "lime";
  const collisions = playerState.trail.map((trailItem) => {
    if (
      trailItem.x === playerState.xPosition &&
      trailItem.y === playerState.yPosition
    ) {
      return false;
    }
    ctx.fillRect(
      trailItem.x * gridSize,
      trailItem.y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
    return true;
  });
  if (collisions.includes(false)) {
    return null;
  } else {
    playerState.trail.push({
      x: playerState.xPosition,
      y: playerState.yPosition,
    });
    while (playerState.trail.length > playerState.tail) {
      playerState.trail.shift();
    }
    return playerState;
  }
}

function Apple({ ctx, x, y }) {
  ctx.fillStyle = "red";
  ctx.fillRect(x * gridSize, y * gridSize, gridSize - 2, gridSize - 2);
}

export default function Snake() {
  let playing = true;
  let lastKey = 0;
  let hasStarted = false;
  let paused = false;
  let [score, setScore] = useState(0);
  const [statusText, setStatusText] = useState("Paused!!");
  const [playerState, setPlayerState] = useState({
    xVelocity: 0,
    xPosition: 10,
    yPosition: 10,
    yVelocity: 0,
    trail: [],
    tail: 5,
  });
  let appleX = getRandomPosition();
  let appleY = getRandomPosition();

  useEffect(() => {
    const gameContainer = document.getElementById("gameContainer");
    gameContainer.addEventListener("keydown", keyPush);
    function keyPush(evt) {
      const keyCodes = [37, 38, 39, 40];
      if (keyCodes.includes(evt.keyCode)) {
        evt.preventDefault();
        lastKey = evt.keyCode;
      } else if (evt.keyCode === 27) {
        playing = !playing;
        setPlayerState({
          ...playerState,
          xVelocity: 0,
          yVelocity: 0,
        });
      }
    }
  });
  useEffect(() => {
    const gameCanvas = document.getElementById("gameCanvas");
    const ctx = gameCanvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    const doStuff = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
      let intersected = false;
      if (
        playerState.xPosition === appleX &&
        playerState.yPosition === appleY
      ) {
        intersected = true;
        setScore(score++);
        appleX = getRandomPosition();
        appleY = getRandomPosition();
      }
      Apple({ ctx, x: appleX, y: appleY });
      setPlayerState(Player({ ctx, playerState, lastKey, intersected }));
    };
    const interval = setInterval(doStuff, 1000 / 15);
    if (!playing) {
      clearInterval(interval);
    }
  }, [true]);

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
