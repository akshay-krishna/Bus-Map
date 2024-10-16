import './testCanvas.css';
import testImageSrc from '../assets/testImage.jpg';
import { useEffect, useRef } from 'react';

const player = {
  w: 50,
  h: 70,
  x: 0,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0,
};

function TestCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 1300;
      canvas.height = 700;
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

    // Set up key event listeners
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
    };
  }, []);

  function drawPlayer() {
    const ctx = contextRef.current;
    const image = imageRef.current;

    if (ctx && image) {
      ctx.drawImage(image, player.x, player.y, player.w, player.h);
    }
  }

  function clear() {
    const ctx = contextRef.current;
    const canvas = canvasRef.current;

    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  function newPos() {
    player.x += player.dx;
    player.y += player.dy;
    detectWalls();
  }

  function detectWalls() {
    const canvas = canvasRef.current;

    if (canvas) {
      // Left wall
      if (player.x < 0) {
        player.x = 0;
      }

      // Right Wall
      if (player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w;
      }

      // Top wall
      if (player.y < 0) {
        player.y = 0;
      }

      // Bottom Wall
      if (player.y + player.h > canvas.height) {
        player.y = canvas.height - player.h;
      }
    }
  }

  function update() {
    clear();
    drawPlayer();
    newPos();
    requestAnimationFrame(update);
  }

  function moveUp() {
    player.dy = -player.speed;
  }

  function moveDown() {
    player.dy = player.speed;
  }

  function moveRight() {
    player.dx = player.speed;
  }

  function moveLeft() {
    player.dx = -player.speed;
  }

  function keyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
      moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
      moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
      moveUp();
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
      moveDown();
    }
  }

  function keyUp(e: KeyboardEvent) {
    if (
      e.key === 'Right' ||
      e.key === 'ArrowRight' ||
      e.key === 'Left' ||
      e.key === 'ArrowLeft' ||
      e.key === 'Up' ||
      e.key === 'ArrowUp' ||
      e.key === 'Down' ||
      e.key === 'ArrowDown'
    ) {
      player.dx = 0;
      player.dy = 0;
    }
  }

  return <canvas ref={canvasRef} className="canvasStyles"></canvas>;
}

export default TestCanvas;
