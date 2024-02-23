let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", () => {
  let h1 = document.querySelector("h1");
  let randomColor = getRandomColor();

  h1.innerText = randomColor;
  h1.style.color = randomColor;
  div.style.backgroundColor = randomColor;
  console.log("Color Updated");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;

  return color;
}
