let account = {
    balance: 10000,
    transactionLog: [],
};

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

function updateTransactionLog() {
    const logSection = document.getElementById("transaction-log");
    logSection.innerHTML = "";
    account.transactionLog.forEach((log, index) => {
        logSection.innerHTML += `
            <div>
                ${index + 1}. ${log.date}: ${log.type} ${log.shares} 股 ${log.ticker}，
                單價 $${log.price}，總金額 $${log.total}
            </div>`;
    });
}

function displayAccountBalance() {
    document.getElementById("account-balance").innerText = `可用資金：$${account.balance.toFixed(2)}`;
}
