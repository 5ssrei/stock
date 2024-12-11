// 初始化比賽數據
let competitionData = {
    users: [],
    started: false,
};

// 比賽開始
function startCompetition() {
    if (competitionData.started) {
        alert("比賽已經開始！");
        return;
    }
    competitionData.started = true;
    competitionData.users = [
        { name: "用戶A", balance: 100000, profit: 0 },
        { name: "用戶B", balance: 100000, profit: 0 },
    ];
    updateLeaderboard();
}

// 更新排行榜
function updateLeaderboard() {
    const leaderboardDiv = document.getElementById("leaderboard");
    if (competitionData.users.length === 0) {
        leaderboardDiv.innerHTML = "<p>目前沒有參賽者。</p>";
        return;
    }

    const sortedUsers = competitionData.users.sort((a, b) => b.profit - a.profit);
    leaderboardDiv.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>排名</th>
                    <th>用戶名</th>
                    <th>賬戶餘額</th>
                    <th>收益</th>
                </tr>
            </thead>
            <tbody>
                ${sortedUsers
                    .map(
                        (user, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${user.name}</td>
                        <td>$${user.balance.toFixed(2)}</td>
                        <td>${user.profit.toFixed(2)}%</td>
                    </tr>
                `
                    )
                    .join("")}
            </tbody>
        </table>
    `;
}

// 模擬更新用戶收益（此功能可結合 API）
setInterval(() => {
    if (competitionData.started) {
        competitionData.users.forEach((user) => {
            const change = (Math.random() - 0.5) * 10; // 隨機收益波動
            user.profit += change;
            user.balance += (user.balance * change) / 100;
        });
        updateLeaderboard();
    }
}, 5000); // 每 5 秒更新一次收益
