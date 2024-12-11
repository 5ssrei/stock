// 加載最新新聞
async function loadNews() {
    const newsContainer = document.getElementById("news-container");
    try {
        // 模擬從 API 加載數據（請用真實 API 替代）
        const newsData = [
            { title: "蘋果股價創新高", content: "蘋果公司股價今日突破歷史高點，投資者信心大增。" },
            { title: "台積電業績上升", content: "台積電第二季度業績同比增長 15%，市場反應熱烈。" },
            { title: "美聯儲加息預期", content: "市場關注美聯儲最新加息政策對科技股的影響。" },
        ];

        // 顯示新聞
        newsContainer.innerHTML = newsData
            .map(
                (news) => `
            <article>
                <h3>${news.title}</h3>
                <p>${news.content}</p>
            </article>
        `
            )
            .join("");
    } catch (error) {
        newsContainer.innerHTML = "<p>無法加載新聞，請稍後重試。</p>";
    }
}

// 加載新聞
loadNews();
