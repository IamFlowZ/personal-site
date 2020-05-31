// import React, { useState, useEffect } from "react";

function Player({ ctx }) {
  const [xVelocity, setXVelocity] = useState(0);
  const [yVelocity, setYVelocity] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [tail, setTail] = useState(0);
  const [trail, setTrail] = useState([]);
  ctx.fillStyle = "lime";
}

function Apple({ ctx }) {
  const [xVelocity, setXVelocity] = useState(0);
  const [yVelocity, setYVelocity] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  ctx.fillStyle = "red";
}
