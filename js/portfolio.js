function simulatePortfolio() {
    // 獲取用戶輸入的比例
    const stockPercentage = parseFloat(document.getElementById("stock-percentage").value);
    const etfPercentage = parseFloat(document.getElementById("etf-percentage").value);
    const bondPercentage = parseFloat(document.getElementById("bond-percentage").value);

    // 驗證比例是否加總為 100%
    if (stockPercentage + etfPercentage + bondPercentage !== 100) {
        alert("比例總和必須為 100%！");
        return;
    }

    // 模擬的歷史回報率和風險（假設數據）
    const historicalData = {
        stock: { return: 8, risk: 15 },
        etf: { return: 6, risk: 10 },
        bond: { return: 3, risk: 5 },
    };

    // 計算組合的回報率和風險（加權平均）
    const portfolioReturn =
        (stockPercentage / 100) * historicalData.stock.return +
        (etfPercentage / 100) * historicalData.etf.return +
        (bondPercentage / 100) * historicalData.bond.return;

    const portfolioRisk =
        (stockPercentage / 100) * historicalData.stock.risk +
        (etfPercentage / 100) * historicalData.etf.risk +
        (bondPercentage / 100) * historicalData.bond.risk;

    // 更新結果到頁面
    document.getElementById("portfolio-return").textContent = portfolioReturn.toFixed(2);
    document.getElementById("portfolio-risk").textContent = portfolioRisk.toFixed(2);
}
