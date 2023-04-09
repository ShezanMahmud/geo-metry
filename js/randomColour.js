const triangleCard = document.getElementById("triangle-card");
const rectangleCard = document.getElementById("rectangle-card");
const parallelogramCard = document.getElementById("parallelogram-card");
const rhombusCard = document.getElementById("rhombus-card");
const pentagonCard = document.getElementById("pentagon-card");
const ellipseCard = document.getElementById("ellipse-card");

triangleCard.addEventListener("mouseenter", function () {
  triangleCard.style.background = randomColour();
});

rectangleCard.addEventListener("mouseenter", function () {
  rectangleCard.style.background = randomColour();
});

parallelogramCard.addEventListener("mouseenter", function () {
  parallelogramCard.style.background = randomColour();
});
rhombusCard.addEventListener("mouseenter", function () {
  rhombusCard.style.background = randomColour();
});
pentagonCard.addEventListener("mouseenter", function () {
  pentagonCard.style.background = randomColour();
});
ellipseCard.addEventListener("mouseenter", function () {
  ellipseCard.style.background = randomColour();
});

function randomColour() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}
