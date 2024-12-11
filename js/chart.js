function drawStockChart(ticker) {
    const ctx = document.getElementById('stockChart').getContext('2d');
    const prices = [100, 105, 110, 102, 108]; // 模擬數據
    const dates = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: `${ticker} 價格走勢`,
                data: prices,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            }]
        },
    });
}
