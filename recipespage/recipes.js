// Elisa API Key: 0fd93c97c5b74ee2b803a82aaeca2aac
// Souleymane API Key:1ea569b65cd44b2db62322e63ca2b48e
// Salamatu API Key: 976a597c6ae7480180eecb8e2322508a

function foodSearch() {
  // let ingredient = $(".ing").val().split(",");
  // let ingredientArray = ingredient.split(",");

  let ingredient1 = $(".ing1").val();
  let ingredient2 = $(".ing2").val();
  let ingredient3 = $(".ing3").val();
  let ingredients = [ingredient1, ingredient2, ingredient3].filter(Boolean); // Removes empty values

  const request = new XMLHttpRequest();
  console.log(request);
  //https://api.spoonacular.com/recipes/findByIngredients?apiKey=1ea569b65cd44b2db62322e63ca2b48e&ingredients=
  //https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar
  const base_url = "https://api.spoonacular.com/recipes/findByIngredients?";
  const api_key = "apiKey=1ea569b65cd44b2db62322e63ca2b48e";

  const full_url = `${base_url}${api_key}&ingredients=${ingredients.join(",")}`;
  console.log(full_url);
  // const full_url = base_url + api_key + "&ingredients=" + ingredient1 + ingredient2 +ingredient3;
  console.log(full_url);

  request.open("GET", full_url, true);

  request.onload = function () {
    let data = JSON.parse(this.response);
    console.log(data);

    if (request.status >= 200 && request.status < 400) {
      let image = data.image;
      $("#title").html("");
      data.forEach((recipe) => {
        
        // Build the missing ingredients list
    let missingList = recipe.missedIngredients.length === 0
      ? '<li>None!</li>'
      : recipe.missedIngredients.map(item => `<li>${item.name}</li>`).join('');
    
        // Append a flip card for each recipe
        $("#title").append(`
        <p class="dish-name merienda-font">Name Of Dish: ${recipe.title}</p><img src="${recipe.image}"><p style="padding-top: 15px;" class="missing">Missing Items</p><ul class="list">
        `
        );

        recipe.missedIngredients.forEach((item) => {
          console.log(item);
          $("#title").append(`<li>${item.name}</li>`);
        });
        $("#title").append(`</ul>`);
      });
    } else {
      $("#error").text("ERROR");
    }
  };

  request.send();
}

//     async function fetchData() {
//     const response = await fetch("https://api.spoonacular.com/recipes/complexSearch");
//     const data = await response.json();
//     const container = document.getElementById("cardsContainer");

//     data.forEach(item => {
//       let card = document.createElement("div");
//       card.className = "card";
//       card.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
//       container.appendChild(card);
//     });
//   }

//   fetchData();


//HEADER
const img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.
img.src =
  "https://cdn.glitch.global/7a3d34ae-865f-4178-a0e7-ebdc11372e10/set-of-restaurant-doodles-food-and-drinks-on-black-background-vector.jpg?v=1746140102638";
const canvasXSize = 800;
const canvasYSize = 200;
const speed = 30; // lower is faster
const scale = .6;
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


ScrollReveal().reveal('header h1', { delay: 300});
ScrollReveal().reveal('header p', { delay: 850});
ScrollReveal().reveal('section#intro img', { delay: 1500});
ScrollReveal().reveal('section#intro h1', { delay: 450});
ScrollReveal().reveal('section#intro h6', { delay: 700});
ScrollReveal().reveal('section#food h3', { delay: 550});
ScrollReveal().reveal('section#food input', { delay: 750});
ScrollReveal().reveal('section#food button', { delay: 750});