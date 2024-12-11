// 初始投資組合
let portfolio = {
    AAPL: { shares: 0, buyPrice: 0, currentPrice: 145 },
    TSLA: { shares: 0, buyPrice: 0, currentPrice: 750 },
    MSFT: { shares: 0, buyPrice: 0, currentPrice: 300 },
};

// 虛擬資金帳戶
let account = {
    balance: 10000,
    transactionLog: [],
};

// 更新持倉資訊
function updatePortfolio() {
    const portfolioSection = document.getElementById("portfolio");
    portfolioSection.innerHTML = "";

    for (const [ticker, stock] of Object.entries(portfolio)) {
        const gainLoss = ((stock.currentPrice - stock.buyPrice) * stock.shares).toFixed(2);
        portfolioSection.innerHTML += `
            <div class="stock">
                <h4>${ticker}</h4>
                <p>持有股數：${stock.shares}</p>
                <p>買入價格：$${stock.buyPrice.toFixed(2)}</p>
                <p>目前價格：$${stock.currentPrice.toFixed(2)}</p>
                <p>盈虧：$${gainLoss}</p>
            </div>
        `;
    }
}

// 購買股票
function buyStock(ticker) {
    const sharesToBuy = parseInt(prompt(`輸入您要購買的 ${ticker} 股數：`), 10);
    const stock = portfolio[ticker];
    const cost = sharesToBuy * stock.currentPrice;

    if (sharesToBuy > 0 && account.balance >= cost) {
        account.balance -= cost;

        stock.shares += sharesToBuy;
        stock.buyPrice = (stock.buyPrice * (stock.shares - sharesToBuy) + cost) / stock.shares;

        logTransaction("買入", ticker, sharesToBuy, stock.currentPrice, cost);
        updatePortfolio();
        alert(`購買成功！花費 $${cost.toFixed(2)}，剩餘資金 $${account.balance.toFixed(2)}`);
    } else {
        alert("餘額不足或輸入數量無效！");
    }
}

// 賣出股票
function sellStock(ticker) {
    const sharesToSell = parseInt(prompt(`輸入您要賣出的 ${ticker} 股數：`), 10);
    const stock = portfolio[ticker];

    if (sharesToSell > 0 && sharesToSell <= stock.shares) {
        const income = sharesToSell * stock.currentPrice;
        account.balance += income;

        stock.shares -= sharesToSell;

        logTransaction("賣出", ticker, sharesToSell, stock.currentPrice, income);
        updatePortfolio();
        alert(`賣出成功！收入 $${income.toFixed(2)}，剩餘資金 $${account.balance.toFixed(2)}`);
    } else {
        alert("無效的賣出數量！");
    }
}

// 記錄交易
function logTransaction(type, ticker, shares, price, total) {
    account.transactionLog.push({
        type,
        ticker,
        shares,
        price,
        total,
        date: new Date().toLocaleString(),
    });
    updateTransactionLog();
}

// 更新交易日誌
function updateTransactionLog() {
    const logSection = document.getElementById("transaction-log");
    logSection.innerHTML = "";

    account.transactionLog.forEach((log, index) => {
        logSection.innerHTML += `
            <div>
                ${index + 1}. ${log.date} - ${log.type} ${log.shares} 股 ${log.ticker}，
                單價 $${log.price.toFixed(2)}，總金額 $${log.total.toFixed(2)}
            </div>`;
    });
}

// 顯示資金餘額
function displayAccountBalance() {
    document.getElementById("account-balance").innerText = `可用資金：$${account.balance.toFixed(2)}`;
}
