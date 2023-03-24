// 1.Number of categories

const categoryList = document.querySelector("#categories");
const numberOfcategory = categoryList.children.length;
console.log(`Number of categories: ${numberOfcategory}`);

// 2.Category and elements
const categoryListItem = document.querySelectorAll(".item");

for (const item of categoryListItem) {
  console.log(`Category: ${item.children[0].textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
}
