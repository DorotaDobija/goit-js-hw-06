const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingridientsListItem = ingredients.forEach((ing) => {
  const newEl = document.createElement("li");
  newEl.textContent = ing;
  newEl.classList.add("item");
  ingredientsList.append(newEl);
});
