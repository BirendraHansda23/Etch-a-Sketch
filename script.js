const body = document.querySelector("body");
body.innerHTML = `<div id="container"></div>`;
body.style =
  "width:100vw; display:flex; justify-content: space-around; align-items:center;";
const container = document.getElementById("container");
container.style =
  "display: flex; flex-wrap: wrap; gap: 1px; height:99vh; width: 99vh";

function divGrid(n) {
  const fragment = document.createDocumentFragment();
  const pixelSize = 99 / n;
  for (let i = 0; i < n * n; i++) {
    const pixel = document.createElement("div");
    pixel.style = `
        background-color: cyan;
        width: ${pixelSize}vh;
        height: ${pixelSize}vh;
      `;
    fragment.appendChild(pixel);
  }

  container.appendChild(fragment);
}

divGrid(40);
