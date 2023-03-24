const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

minusBtn.addEventListener("click", () => {
  counterValue = counterValue - 1;
  counter.textContent = counterValue;
});

plusBtn.addEventListener("click", () => {
  counterValue = counterValue + 1;
  counter.textContent = counterValue;
});
