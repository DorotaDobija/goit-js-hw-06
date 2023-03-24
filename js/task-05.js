const inputEl = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

inputEl.addEventListener(
  "input",
  (event) => (textOutput.textContent = event.currentTarget.value)
);
