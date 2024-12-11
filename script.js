const API_KEY = 'your_alpha_vantage_api_key'; // 請替換為您的 API 密鑰
const symbol = 'AAPL'; // 示例：蘋果公司股票代號

async function fetchStockData() {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function renderChart(data) {
    const timeSeries = data['Time Series (5min)'];
    const labels = Object.keys(timeSeries).slice(0, 10).reverse(); // 時間標籤
    const prices = labels.map((time) => parseFloat(timeSeries[time]['1. open'])); // 開盤價

    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${symbol} 股票價格`,
                data: prices,
                borderWidth: 2
            }]
        }
    });
}

async function init() {
    const stockData = await fetchStockData();
    renderChart(stockData);
}

document.addEventListener('DOMContentLoaded', init);
