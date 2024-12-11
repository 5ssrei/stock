let leaderboard = [];

function updateLeaderboard(user, balance) {
    leaderboard.push({ user, balance });
    leaderboard.sort((a, b) => b.balance - a.balance);

    const boardSection = document.getElementById("leaderboard");
    boardSection.innerHTML = leaderboard.map((entry, index) => `
        <div>${index + 1}. ${entry.user} - $${entry.balance.toFixed(2)}</div>
    `).join("");
}
