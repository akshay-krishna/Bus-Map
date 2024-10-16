import './testCanvas.css';
import { useEffect, useRef } from 'react';
import testImageSrc from '../assets/testImage.jpg';

const player = {
  w: 300, // Player's width
  h: 300, // Player's height
  x: 0, // Initial X position
  y: 200, // Initial Y position
  dx: 4, // Speed on the X axis
  dy: 4, // Speed on the Y axis
};

const TextCanvasAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const context = canvas.getContext('2d');
      if (context) {
        contextRef.current = context;
      }

      // Load the image once and store it
      const image = new Image();
      image.src = testImageSrc;
      image.onload = () => {
        imageRef.current = image;
        requestAnimationFrame(update);
      };
    }
  }, []);

  // Function to clear the canvas
  function clearCanvas() {
    const ctx = contextRef.current;
    const canvas = canvasRef.current;
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the entire canvas
    }
  }

  // Function to draw the image (player)
  function drawPlayer() {
    const image = imageRef.current;
    const ctx = contextRef.current;
    if (ctx && image) {
      ctx.drawImage(image, player.x, player.y, player.w, player.h); // Draw the image at the new position
    }
  }

  // Update function to animate the player
  function update() {
    clearCanvas(); // Clear the canvas before redrawing

    drawPlayer(); // Draw the player at the new position

    // Update player position
    player.x += player.dx;
    player.y += player.dy;

    // Detect and handle collision with canvas walls

    const canvas = canvasRef.current;
    if (canvas) {
      // Right wall or left wall collision
      if (player.x + player.w > canvas.width || player.x < 0) {
        player.dx *= -1; // Reverse X direction
      }

      // Bottom wall or top wall collision
      if (player.y + player.h > canvas.height || player.y < 0) {
        player.dy *= -1; // Reverse Y direction
      }
    }

    requestAnimationFrame(update); // Keep the animation going
  }

  return (
    <canvas
      ref={canvasRef}
      className="canvasStyles"
      width={window.innerWidth}
      height={window.innerHeight}
    ></canvas>
  );
};

export default TextCanvasAnimation;
