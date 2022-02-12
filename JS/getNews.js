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
  // let newsAPIs = [
  //   `https://api.thenewsapi.com/v1/news/all?api_token=h1UUJhBTJaOz08GlPRbz7jgolehXQ9nHTv0skfAd&language=en&search=${input}`,
  //   `https://newsapi.org/v2/everything?q=${input}&language=en&apiKey=efb0aea185bb4f20b853307af0faf083`,
  // ];
  let newsAPIs = `https://api.thenewsapi.com/v1/news/all?api_token=h1UUJhBTJaOz08GlPRbz7jgolehXQ9nHTv0skfAd&language=en&search=${input}`;
  let theNewsAPI = [];
  let googleNewsAPI = [];

  // we automate the search in api so that we don't not make an repetitive code
  // for (let x = 0; x <= 1; ++x) {
  //   let response = await fetch(newsAPIs[x]);
  //   let news = await response.json();
  //   if (x === 0) {
  //     news.data.map((article) => {
  //       theNewsAPI.push(article);
  //     });
  //   } else {
  //     news.articles.map((article) => {
  //       googleNewsAPI.push(article);
  //     });
  //   }
  // }

  let response = await fetch(newsAPIs);
  let news = await response.json();
  news.data.map((article) => {
    theNewsAPI.push(article);
  });

  response = await fetch(
    "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        "x-rapidapi-key": "81735f0910msh04fbe462a0ab2cfp1d56bfjsn747cf7d9b4ab",
      },
    }
  );
  news = await response.json();
  news.value.map((article) => {
    googleNewsAPI.push(article);
  });
  // console.log(news);

  return [theNewsAPI, googleNewsAPI];
}
