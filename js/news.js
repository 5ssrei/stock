async function loadNews() {
    const apiKey = 'WUTE6YD6VBKSUQGB'; // 替換為你的 NewsAPI Key
    const url = `https://newsapi.org/v2/everything?q=stock&sortBy=publishedAt&language=en&apiKey=${apiKey}`;
    const newsContainer = document.getElementById("news-container");

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("無法加載新聞數據");

        const data = await response.json();
        if (data.articles.length === 0) {
            newsContainer.innerHTML = "<p>目前沒有相關新聞。</p>";
            return;
        }

        // 顯示新聞列表
        newsContainer.innerHTML = data.articles
            .slice(0, 10) // 只顯示前 10 條新聞
            .map(
                (article) => `
            <article>
                <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                <p>${article.description || "內容摘要不可用。"}</p>
                <small>來源：${article.source.name}，發佈於 ${new Date(article.publishedAt).toLocaleString()}</small>
            </article>
        `
            )
            .join("");
    } catch (error) {
        newsContainer.innerHTML = `<p>加載失敗：${error.message}</p>`;
    }
}

// 加載新聞
loadNews();
