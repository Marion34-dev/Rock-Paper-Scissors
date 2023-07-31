const Player = require('./player.js');

class Battle {

    setup(names, playerClass = Player) {
        this.players = names.map(name => new playerClass(name));
    }

    currentPlayer() {
        return this.players[0];
    }

    otherPlayer() {
        return this.players[1];
    }

    // switch() {
    //     this.players.reverse();
    // }

    turn() {
        const choices = {
            1: "Rock",
            2: "Paper",
            3: "Scissors"
        };
        this.otherPlayerChoice = choices[Math.floor(Math.random() * 3) + 1];
        return this.otherPlayerChoice;
    }

}

module.exports = Battle;