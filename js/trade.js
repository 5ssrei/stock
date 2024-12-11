// 初始化持倉資訊
let portfolio = {
    AAPL: { shares: 0, buyPrice: 0, currentPrice: 150 },
};

// 模擬購買股票
function buyStock(ticker) {
    const shares = prompt(`您要購買多少股的 ${ticker}？`);
    if (shares && !isNaN(shares)) {
        const cost = shares * portfolio[ticker].currentPrice;
        alert(`您購買了 ${shares} 股 ${ticker}，總金額為 $${cost}`);
        portfolio[ticker].shares += parseInt(shares, 10);
        portfolio[ticker].buyPrice = portfolio[ticker].currentPrice;
        updatePortfolio();
    } else {
        alert("請輸入有效的股數！");
    }
}

// 模擬賣出股票
function sellStock(ticker) {
    const shares = prompt(`您要賣出多少股的 ${ticker}？`);
    if (shares && !isNaN(shares) && portfolio[ticker].shares >= shares) {
        const income = shares * portfolio[ticker].currentPrice;
        alert(`您賣出了 ${shares} 股 ${ticker}，共獲得 $${income}`);
        portfolio[ticker].shares -= parseInt(shares, 10);
        updatePortfolio();
    } else {
        alert("持倉不足或輸入無效！");
    }
}

// 更新持倉資訊
function updatePortfolio() {
    const portfolioDiv = document.getElementById("portfolio");
    portfolioDiv.innerHTML = `
        <p>股票：${Object.keys(portfolio)
            .map(ticker => `
                ${ticker} - 持有股數：${portfolio[ticker].shares}，目前價格：$${portfolio[ticker].currentPrice}
            `)
            .join('<br>')}
        </p>
    `;
}
