const API_KEY = `57990358696a485d8f4168d83025fc69`;
const BASE_URL = `https://newsapi.org/v2/`;

const refs = {
  newsBox: document.querySelector(".newsBox"),
  newsForm: document.forms.newsForm,
}


refs.newsForm.addEventListener("submit", onSubmit);


async function onSubmit(e) {
  e.preventDefault();
  refs.newsBox.innerHTML = "";
  const valueCountry = refs.newsForm.country.value;
  const valueCategory = refs.newsForm.category.value;

  await appendContent(valueCountry, valueCategory);

}

async function fetchUrl(country, category) {
    const responce = await fetch(`${BASE_URL}top-headlines?apiKey=${API_KEY}&country=${country}&category=${category}`);
    const data = await responce.json();
    return data;
}

async function appendContent(valueCountry, valueCategory) {
  const data = await fetchUrl(valueCountry, valueCategory);
  const newsArr = data.articles;
  const generateContent = createContent(newsArr);

  refs.newsBox.insertAdjacentHTML("beforeEnd", generateContent);
    
}

function createContent(news) {
    return news.map(oneNews => {
        const { author, title, url, urlToImage } = oneNews;
        return `<li class="news__item">
        <h2 class="news__title">${title}</h2>
        <a class="news__link" href="${url}"
          ><img class="news__image" src="${urlToImage}" alt=""
        /></a>
        <p class="news__author">Author: ${author}</p>
      </li>`
    }).join('');
}