// Global variable
let isBoxAnimated = false;

// Function with parameter + return value
function toggleClass(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// Function controlling box animation (demonstrates scope)
function toggleBox() {
  isBoxAnimated = toggleClass("box", "animate");
  console.log("Box animation active:", isBoxAnimated);
}

// Modal functions
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
