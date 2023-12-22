// const selectColor = document.getElementById("form");
// const myHeader = document.getElementById("header");

// selectColor.addEventListener("submit", handleMyColor);

// function handleMyColor(event) {
//   event.preventDefault();
//   const form = event.target;
//   const color = form.elements.color.value;
//   console.log(color);
//   myHeader.style.backgroundColor = color;
// }

const selectColor = document.getElementById("color");
const myHeader = document.getElementById("header");

selectColor.addEventListener("input", handleMyColor);

function handleMyColor(e) {
  const color = e.target.value;
  myHeader.style.backgroundColor = color;
}
