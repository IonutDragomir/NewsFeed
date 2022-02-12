import { getNews } from "./getNews.js";
import { displayNews } from "./displayNews.js";
import { sortNews } from "./sortNews.js";

document.querySelector("[data-button]").addEventListener("click", main);
window.addEventListener("load", main);

async function main() {
  let search = document.querySelector("[data-input]").value;
  if (search === "") search = "latest%20news";
  let result = await getNews(search);
  displayNews(sortNews(result[0], result[1]));
}
