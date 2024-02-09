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

// const selectColor = document.getElementById("color");
// const myHeader = document.getElementById("header");

// selectColor.addEventListener("input", handleMyColor);

// function handleMyColor(e) {
//   const color = e.target.value;
//   myHeader.style.backgroundColor = color;
// }

const selectColor = document.getElementById("color");
const myHeader = document.getElementById("header");

selectColor.addEventListener("input", handleMyColor);

function handleMyColor(e) {
  const color = e.target.value;
  myHeader.style.backgroundColor = color;
  localStorage.setItem("colorHead", JSON.stringify(color));
}

try {
  const data = JSON.parse(localStorage.getItem("colorHead"));
  myHeader.style.backgroundColor = data;
  selectColor.value = data;
} catch (error) {
  console.log(error.message);
}
