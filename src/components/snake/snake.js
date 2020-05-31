import React, { useState, useEffect } from "react";

const gridSize = 20;

function getRandomPosition() {
  return Math.floor(Math.random() * gridSize);
}

function checkCollision(x, y) {}

function Player({ ctx }) {
  const xVelocity = 0;
  const yVelocity = 0;
  const xPosition = 10;
  const yPosition = 10;
  const tail = 0;
  const trail = [{ x: xPosition * gridSize, y: yPosition * gridSize }];
  ctx.fillStyle = "lime";
  trail.forEach((element) => {
    ctx.fillRect(
      element.x * gridSize,
      element.y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
  });
  trail.map((trailItem) => {
    console.log(trail);
    ctx.fillRect(
      trailItem.x * gridSize,
      trailItem.y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
  });
}

function Apple({ ctx }) {
  const xVelocity = 0;
  const yVelocity = 0;
  ctx.fillStyle = "red";
  ctx.fillRect(
    getRandomPosition() * gridSize,
    getRandomPosition() * gridSize,
    gridSize - 2,
    gridSize - 2
  );
}

export default function Snake() {
  const [hasStarted, setHasStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [statusText, setStatusText] = useState("Paused!!");

  useEffect(() => {
    const gameCanvas = document.getElementById("gameCanvas");
    const ctx = gameCanvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    Apple({ ctx });
    Player({ ctx });
  });

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
