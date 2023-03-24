const inputEl = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  event.preventDefault();
  textOutput.textContent = event.currentTarget.value;
  if (inputEl.value === "") {
    textOutput.textContent = "Anonymous";
  }
});
