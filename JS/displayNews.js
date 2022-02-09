export function displayNews(allNews) {
      const template = document.querySelector("[data-news-template]");
      const newsBody = document.querySelector("[data-newsBody]");
      newsBody.innerHTML = `<template data-news-template>
      <div class="news" data-news-card>
        <p id="date" data-news-date></p>
        <p id="title" data-news-title></p>
        <img id="imageNews" data-news-image />
        <p id="content" data-news-content></p>
        <a href="" id="link" data-news-link>Go to News.</a>
      </div>
    </template>`;
    
      allNews.forEach((article) => {
        let cardContent = template.content.cloneNode(true);
    
        let date = cardContent.querySelector("[data-news-date]");
        let formatDate;
        let title = cardContent.querySelector("[data-news-title]");
        let image = cardContent.querySelector("[data-news-image]");
        let content = cardContent.querySelector("[data-news-content]");
        let link = cardContent.querySelector("[data-news-link]");
        if (article.API === 1) {
          formatDate = article.published_at.split("T");
          image.src = article.image_url;
        } else {
          formatDate = article.publishedAt.split("T");
          image.src = article.urlToImage;
        }
    
        date.innerText = formatDate[0];
        title.innerText = article.title;
        content.innerText = article.description;
        link.href = article.url;
        newsBody.append(cardContent);
      });
    }