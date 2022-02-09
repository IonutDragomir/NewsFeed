export async function getNews(input) {
  // select input to take the value within it and to search it in the api
  //we split the value and put %20 after every word
  //to make a valid query in api
  let searchArray = input.split(" ");
  input = "";
  searchArray.map((element) => {
    input += element + "%20";
  });

  //links to api
  let newsAPIs = [
    `https://api.thenewsapi.com/v1/news/all?api_token=h1UUJhBTJaOz08GlPRbz7jgolehXQ9nHTv0skfAd&language=en&search=${input}`,
    `https://newsapi.org/v2/everything?q=${input}&language=en&apiKey=efb0aea185bb4f20b853307af0faf083`,
  ];
  let theNewsAPI = [];
  let googleNewsAPI = [];

  // we automate the search in api so that we don't not make an repetitive code
  for (let x = 0; x <= 1; ++x) {
    let response = await fetch(newsAPIs[x]);
    let news = await response.json();
    if (x === 0) {
      news.data.map((article) => {
        theNewsAPI.push(article);
      });
    } else {
      news.articles.map((article) => {
        googleNewsAPI.push(article);
      });
    }
  }
  return [theNewsAPI, googleNewsAPI];
}
