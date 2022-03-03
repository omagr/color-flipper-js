const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const changeColorButton = document.getElementById("btn-color");
const changeColorText = document.getElementById("color");
const changeColorBody = document.querySelector("body");
const hideMainText = document.getElementById("hideText");
const convertGrad = document.getElementById("convertGradient");
let hold = false;

changeColorButton.addEventListener("click", function randomColor() {
  randomColorOne();
  randomColorTwo();
  randomColorThree();
  randomColorFour();
  randomColorFive();
  converttoGradient();
});
let color1, color2, color3, color4, color5;
function randomColorOne() {
  color1 = "#";
  for (let index = 0; index < 6; index++) {
    color1 += hexArray[randomNmber()];
  }
  document.getElementById("colorPlate1").style.backgroundColor = color1;
  document.getElementById("color1").textContent = color1;
}
function randomColorTwo() {
  color2 = "#";
  for (let index = 0; index < 6; index++) {
    color2 += hexArray[randomNmber()];
  }
  document.getElementById("colorPlate2").style.backgroundColor = color2;
  document.getElementById("color2").textContent = color2;
}
function randomColorThree() {
  color3 = "#";
  for (let index = 0; index < 6; index++) {
    color3 += hexArray[randomNmber()];
  }
  document.getElementById("colorPlate3").style.backgroundColor = color3;
  document.getElementById("color3").textContent = color3;
}
function randomColorFour() {
  color4 = "#";
  for (let index = 0; index < 6; index++) {
    color4 += hexArray[randomNmber()];
  }
  document.getElementById("colorPlate4").style.backgroundColor = color4;
  document.getElementById("color4").textContent = color4;
}
function randomColorFive() {
  color5 = "#";
  for (let index = 0; index < 6; index++) {
    color5 += hexArray[randomNmber()];
  }
  document.getElementById("colorPlate5").style.backgroundColor = color5;
  document.getElementById("color5").textContent = color5;
}

function randomNmber() {
  return Math.floor(Math.random() * hexArray.length);
}

hideMainText.addEventListener("mousedown", function hideText() {
  if (!hold) {
    document.getElementById("text1").style.opacity = "0%";
    document.getElementById("text2").style.opacity = "0%";
    document.getElementById("text3").style.opacity = "0%";
    document.getElementById("text4").style.opacity = "0%";
    document.getElementById("text5").style.opacity = "0%";
    document.getElementById("hideText").style.opacity = "100%";
    hold = true;
  } else {
    document.getElementById("text1").style.opacity = "100%";
    document.getElementById("text2").style.opacity = "100%";
    document.getElementById("text3").style.opacity = "100%";
    document.getElementById("text4").style.opacity = "100%";
    document.getElementById("text5").style.opacity = "100%";
    document.getElementById("hideText").style.opacity = "50%";
    hold = false;
  }
});

convertGrad.addEventListener("mousedown", function convertToGrad() {
  document.getElementById("convertedtoGradient").style.display = "grid";
  document.getElementById("convertedtoGradient").style.placeContent = "center";
  converttoGradient();
});
function converttoGradient() {
  document.getElementById("convertedtoGradient").style.background = `linear-gradient(100deg,${color1},${color2},${color3},${color4},${color5})`;
  document.getElementById(
    "gradientColor"
  ).textContent = `linear-gradient(100deg,${color1},${color2},${color3},${color4},${color5})`;
}