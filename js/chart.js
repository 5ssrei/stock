// 引入 Chart.js 繪製股票價格走勢圖
function drawStockChart(ticker, prices, dates) {
    const ctx = document.getElementById('stockChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates, // 日期
            datasets: [{
                label: `${ticker} 價格走勢`,
                data: prices, // 價格數據
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '日期'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: '價格 (USD)'
                    },
                    beginAtZero: false
                }
            }
        },
    });
}

// 示例數據加載函數，提供模擬數據或 API 數據
function fetchStockData(ticker) {
    // 模擬數據，可替換為實時 API
    const examplePrices = [100, 105, 110, 102, 108, 112];
    const exampleDates = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];

    // 繪製圖表
    drawStockChart(ticker, examplePrices, exampleDates);
}
