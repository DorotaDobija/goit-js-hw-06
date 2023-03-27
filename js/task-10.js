const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = 30 + 10 * i + "px";
    newBox.style.height = 30 + 10 * i + "px";
    newBox.style.marginTop = "15px";
    divBoxes.append(newBox);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

btnCreate.addEventListener("click", () => {
  const amount = inputEl.value;
  createBoxes(amount);
});
btnDestroy.addEventListener("click", destroyBoxes);
