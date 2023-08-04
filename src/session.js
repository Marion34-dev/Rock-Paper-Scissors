const Player = require('./player.js');
const autoPlayer = require('./computer.js');

class Session {
    player;
    computer = new autoPlayer();
    computerWeapon = this.computer.autoPlayerTurn();

    constructor(name, weapon) {
        this.player = new Player(name, weapon)
    }

    winConditions = {
        "Rock": "Scissors",
        "Paper": "Rock",
        "Scissors": "Paper"
    };

    result() {
        if (this.player.weapon === this.computerWeapon) {
            return "Oops, it's a tie!";
        }

        if (winConditions[this.player.weapon] === this.computerWeapon) {
        return "Congrats, you win!";
        }

        return "Sorry, you lose";
    }
}

module.exports = Session;