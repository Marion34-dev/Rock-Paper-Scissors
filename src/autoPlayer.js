class autoPlayer {
    autoPlayerTurn() {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }
}

module.exports = autoPlayer;
