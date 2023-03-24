const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  inputEl.classList.add("invalid");
  if (inputEl.value.length === +inputEl.dataset.length) {
    inputEl.classList.replace("invalid", "valid");
  }
});
