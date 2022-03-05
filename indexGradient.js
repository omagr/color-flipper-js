const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const changeColorText = document.getElementById("color");
const changeColorBody = document.querySelector("body");
const changeColorButtonGradient = document.getElementById("btn-color-gradient");
const hideMainText = document.getElementById("hideText");
let hold = false;

changeColorButtonGradient.addEventListener("click", function gradientChange() {
  let colorOne = "#";
  for (let index = 0; index < 6; index++) {
    colorOne += hexArray[randomNmber()];
  }
  let colorTwo = "#";
  for (let index = 0; index < 6; index++) {
    colorTwo += hexArray[randomNmber()];
  }
  document.getElementById(
    "gradient_body"
  ).style.background = `linear-gradient(100deg,${colorOne},${colorTwo})`;
  document.getElementById(
    "gradientColor"
  ).textContent = `linear-gradient(100deg,${colorOne},${colorTwo})`;
  document.getElementById("colorOne").textContent = colorOne;
  document.getElementById("colorTwo").textContent = colorTwo;
});

function randomNmber() {
  return Math.floor(Math.random() * hexArray.length);
}

hideMainText.addEventListener("mousedown", function hideText() {
  if (!hold) {
    document.getElementById("text1").style.opacity = "0%";
    document.getElementById("text2").style.opacity = "0%";
    document.getElementById("hideText").style.opacity = "100%";
    hold = true;
  } else {
    document.getElementById("text1").style.opacity = "100%";
    document.getElementById("text2").style.opacity = "100%";
    document.getElementById("hideText").style.opacity = "50%";
    hold = false;
  }
});
