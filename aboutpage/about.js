//HEADER
const img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.
img.src = "https://cdn.glitch.global/7a3d34ae-865f-4178-a0e7-ebdc11372e10/IMG_6050.jpeg?v=1746656344244";
//img.src = "https://i.ibb.co/5xSd0pjB/foodheader.png";
const canvasXSize = 800;
const canvasYSize = 200;
const speed = 30; // lower is faster
const scale = 1.1;
const y = -4.5; // vertical offset

// Main program
const dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = () => {
  
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > canvasXSize) {
    // Image larger than canvas
    x = canvasXSize - imgW;
  }

  // Check if image dimension is larger than canvas
  clearX = Math.max(imgW, canvasXSize);
  clearY = Math.max(imgH, canvasYSize);

  // Get canvas context
  ctx = document.getElementById("canvas").getContext("2d");

  // Set refresh rate
  return setInterval(draw, speed);
};

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

  // If image is <= canvas size
  if (imgW <= canvasXSize) {
    // Reset, start from beginning
    if (x > canvasXSize) {
      x = -imgW + x;
    }

    // Draw additional image1
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }

    // Draw additional image2
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  } else {
    // Image is > canvas size
    // Reset, start from beginning
    if (x > canvasXSize) {
      x = canvasXSize - imgW;
    }

    // Draw additional image
    if (x > canvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }

  // Draw image
  ctx.drawImage(img, x, y, imgW, imgH);

  // Amount to move
  x += dx;
}


//not working
ScrollReveal().reveal('#header-about h1', { delay: 300});
ScrollReveal().reveal('#header-about p', { delay: 850});
ScrollReveal().reveal('section#jenna img', { delay: 450});
ScrollReveal().reveal('section#jenna h1', { delay: 800});
ScrollReveal().reveal('section#jenna p', { delay: 1000});
ScrollReveal().reveal('section#favorites h1', { delay: 550});
ScrollReveal().reveal('section#favorites p', { delay: 750});
ScrollReveal().reveal('section#favorites h4', { delay: 950});
ScrollReveal().reveal('section#favorites #card-1', { delay: 750});
ScrollReveal().reveal('section#favorites #card-2', { delay: 850});
ScrollReveal().reveal('section#favorites #card-3', { delay: 950});
ScrollReveal().reveal('section#favorites #card-4', { delay: 1050});
ScrollReveal().reveal('section#favorites #card-5', { delay: 1150});
ScrollReveal().reveal('section#favorites #card-6', { delay: 1250});
ScrollReveal().reveal('section#favorites #card-7', { delay: 1350});
ScrollReveal().reveal('section#favorites #card-8', { delay: 1450});