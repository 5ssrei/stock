let portfolio = {
    AAPL: { shares: 1, buyPrice: 100, currentPrice: 100 },
    TSLA: { shares: 0, buyPrice: 0, currentPrice: 200 },
};

let account = {
    balance: 10000,
};

let transactionLog = [];

function updatePortfolio() {
    // 更新持倉 UI
}

function buyStockWithAccount(ticker) {
    const sharesToBuy = parseInt(prompt(`輸入您要購買的股數 (${ticker})：`), 10);
    const cost = sharesToBuy * portfolio[ticker].currentPrice;
    if (sharesToBuy > 0 && account.balance >= cost) {
        account.balance -= cost;
        portfolio[ticker].shares += sharesToBuy;
        portfolio[ticker].buyPrice = ((portfolio[ticker].buyPrice * portfolio[ticker].shares) + cost) / (portfolio[ticker].shares + sharesToBuy);
        logTransaction("買入", ticker, sharesToBuy, portfolio[ticker].currentPrice, cost);
        updatePortfolio();
        alert(`購買成功！花費 $${cost.toFixed(2)}，剩餘資金 $${account.balance.toFixed(2)}`);
    } else {
        alert("餘額不足或輸入數量無效！");
    }
}

function logTransaction(type, ticker, shares, price, total) {
    const transaction = {
        type,
        ticker,
        shares,
        price,
        total,
        date: new Date().toLocaleString(),
    };
    transactionLog.push(transaction);
    updateTransactionLog();
}

function updateTransactionLog() {
    const logSection = document.getElementById("transaction-log");
    logSection.innerHTML = "";
    transactionLog.forEach((log, index) => {
        logSection.innerHTML += `
            <div class="transaction">
                <p>${index + 1}. ${log.date}</p>
                <p>${log.type} ${log.shares} 股 ${log.ticker}，價格：$${log.price}，總金額：$${log.total}</p>
            </div>
        `;
    });
}
