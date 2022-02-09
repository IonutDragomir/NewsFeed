import { getNews } from "./getNews.js";
import { displayNews } from "./displayNews.js";
import { sortNews } from "./sortNews.js";

document.querySelector("[data-button]").addEventListener("click", main);
window.addEventListener("load", main);

async function main() {
  let search = document.querySelector("[data-input]").value;
  if (search === "") search = "latest%20news";
  console.log("search value:", search);
  let result = await getNews(search);
  console.log("result value:", result);
  displayNews(sortNews(result[0], result[1]));
}
