const body = document.querySelector("body");
body.innerHTML = `
  <div id="title"><h1>Etch-a-Sketch</h1><button id="set-btn">Set</button><button id="reset-btn">Reset</button>
  </div>
  <div id="container"></div>
`;
body.classList.add("wrapper");

const container = document.getElementById("container");
container.classList.add("container");

const setBtn = document.getElementById("set-btn");
setBtn.classList.add("btn");

const resetBtn = document.getElementById("reset-btn");
resetBtn.classList.add("btn");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function divGrid(n) {
  container.innerHTML = "";
  const gridSize = 98;
  const pixelSize = gridSize / n;

  for (let i = 0; i < n * n; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style = `
        background-color: white;
        width: ${pixelSize}vh;
        height: ${pixelSize}vh;
        display: inline-block;
        box-sizing: border-box;
      `;

    // event listener
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = getRandomColor();
    });

    container.appendChild(pixel);
  }
}

setBtn.addEventListener("click", () => {
  setBtn.style.backgroundColor = "whitesmoke";

  setTimeout(() => {
    setBtn.style.backgroundColor = "white";
  }, 50);

  setTimeout(function () {
    let n = prompt("Enter the number of rows (1-250)");

    n = parseInt(n);
    if (isNaN(n) || n < 1 || n > 250) {
      alert("Please enter a number between 1 and 250");
      divGrid(16);
      return;
    }

    divGrid(n);
  }, 200);
});

resetBtn.addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
});

divGrid(16);
