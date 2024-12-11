const API_KEY = 'WUTE6YD6VBKSUQGB'; // 使用您的 API 密鑰
const symbol = 'AAPL'; // 示例：蘋果公司股票代號（可改為其他股票代碼）

async function fetchStockData() {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function renderChart(data) {
    const timeSeries = data['Time Series (5min)'];
    if (!timeSeries) {
        console.error('未能獲取數據，請檢查 API 鑰匙或請求限制。');
        return;
    }

    const labels = Object.keys(timeSeries).slice(0, 10).reverse(); // 獲取最近的 10 條時間
    const prices = labels.map((time) => parseFloat(timeSeries[time]['1. open'])); // 獲取開盤價

    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${symbol} 股票價格`,
                data: prices,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '時間',
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '價格',
                    }
                }
            }
        }
    });
}

async function init() {
    const stockData = await fetchStockData();
    renderChart(stockData);
}

document.addEventListener('DOMContentLoaded', init);
