// Triangle input
const triangleBInputValue = document.getElementById("triangleBInput");
const triangleHInputValue = document.getElementById("triangleHInput");
// rectangle input
const rectangleWInputValue = document.getElementById("rectangle-w-input-value");
const rectanglaLInputValue = document.getElementById("rectangle-l-input-value");

const triangleCalculateBtn = document.getElementById("triangleCalculateBtn");

const calculateArea = document.getElementById("calculate-area");

const hadSeenResult = [];

function handleCalculation(calculationBtn) {
  let childCount = calculateArea.childElementCount;
  let div = document.createElement("div");

  if (calculationBtn === "triangle") {
    if (triangleHInputValue.value === "" || triangleBInputValue.value === "") {
      alert("please added valid input");
    } else {
      let calculation =
        0.5 * triangleBInputValue.value * triangleHInputValue.value;
      if (!hadSeenResult.includes("triangle")) {
        hadSeenResult.push("triangle");
        createResult(div, "Triangle", calculation, childCount);
      } else {
        updateResult("Triangle", calculation);
      }
    }
  } else if (calculationBtn === "rectangle") {
    if (
      rectangleWInputValue.value === "" ||
      rectanglaLInputValue.value === ""
    ) {
      alert("please added valid input");
    } else {
      let calculation = rectangleWInputValue.value * rectanglaLInputValue.value;

      if (!hadSeenResult.includes("rectangle")) {
        hadSeenResult.push("rectangle");
        createResult(div, "Rectangle", calculation, childCount);
      } else {
        updateResult("Rectangle", calculation);
      }
    }
  } else if (calculationBtn === "parallelogram") {
    let calculation = 10 * 12;

    if (!hadSeenResult.includes("parallelogram")) {
      hadSeenResult.push("parallelogram");
      createResult(div, "Parallelogram", calculation, childCount);
    } else {
      updateResult("Parallelogram", calculation);
    }
  } else if (calculationBtn === "rhombus") {
    let calculation = 0.5 * 16 * 8;

    if (!hadSeenResult.includes("rhombus")) {
      hadSeenResult.push("rhombus");
      createResult(div, "Rhombus", calculation, childCount);
    } else {
      updateResult("Rhombus", calculation);
    }
  } else if (calculationBtn === "pentagon") {
    let calculation = 0.5 * 6 * 10;

    if (!hadSeenResult.includes("pentagon")) {
      hadSeenResult.push("pentagon");
      createResult(div, "Pentagon", calculation, childCount);
    } else {
      updateResult("Pentagon", calculation);
    }
  } else if (calculationBtn === "ellipse") {
    let calculate = 3.1416 * 10 * 4;
    let calculation = calculate.toFixed(2);

    if (!hadSeenResult.includes("ellipse")) {
      hadSeenResult.push("ellipse");
      createResult(div, "Ellipse", calculation, childCount);
    } else {
      updateResult("Ellipse", calculation);
    }
  }
}

function updateResult(name, calculation) {
  const updateResultId = document.getElementById(name);
  updateResultId.innerText = calculation;
}

function createResult(div, name, calculation, childCount) {
  div.innerHTML = `<div class="flex gap-x-5 mb-5">
  <h4>${childCount + 1}. ${name}</h4>
  <p><span id=${name}>${calculation}</span>cm<sup>2</sup></p>
  <button class="bg-blue-600 rounded">Convert to m<sup>2</sup></button>
  </div>`;
  calculateArea.appendChild(div);
}
