export function sortNews(firstAPI, secondAPI) {
  //we save the newest news
  //data property helps us to compare articles between them
  //index gives us the pozition in the array where the article is so that we are able to delete it after we sort it
  //API tells us in wich array the article is ex: 1(first), 2(second ..)
  let recentNews = {
    date: "",
    article: "",
    index: 0,
    API: "",
  };

  // this is the array in wich we sort all articles
  let sortedArray = [];

  //we check all 25 articles
  for (let i = 0; i < 25; ++i) {
    // search in first array until there are no more elements in it
    if (firstAPI.length > 0) {
      for (let j = 0; j < firstAPI.length; ++j) {
        if (recentNews.date < firstAPI[j].published_at) {
          recentNews.date = firstAPI[j].published_at;
          recentNews.article = firstAPI[j];
          recentNews.index = j;
          recentNews.API = 1;
        }
      }
    }
    //search in the second array until there are no more elements in it
    if (secondAPI.length > 0) {
      for (let k = 0; k < secondAPI.length; ++k) {
        if (recentNews.date < secondAPI[k].publishedAt) {
          recentNews.date = secondAPI[k].publishedAt;
          recentNews.article = secondAPI[k];
          recentNews.index = k;
          recentNews.API = 2;
        }
      }
    }
    //we add the most recent news
    sortedArray.push({ ...recentNews.article, API: recentNews.API });
    //we check in wich array is the article that is sorted and now needs to be deleted
    if (recentNews.API === 1) {
      firstAPI.splice(recentNews.index, 1);
    } else {
      secondAPI.splice(recentNews.index, 1);
    }
    //we reset the recentNews object so that we can recheck
    recentNews = {
      date: "",
      article: "",
      index: 0,
      API: "",
    };
  }
  return sortedArray;
}
