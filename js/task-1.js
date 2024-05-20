const categoryElem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryElem.length}`);

const liTitleElem = categoryElem.forEach((el) => {
  const categoryTitle = el.querySelector("h2").textContent;
  const categoryLiItems = el.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryLiItems}`);
});
