async function fetchStockNews(ticker) {
    const apiKey = "YOUR_NEWS_API_KEY";
    const url = `https://newsapi.org/v2/everything?q=${ticker}&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const newsSection = document.getElementById("news-section");

    newsSection.innerHTML = data.articles.map(article => `
        <div>
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description}</p>
        </div>
    `).join("");
}
