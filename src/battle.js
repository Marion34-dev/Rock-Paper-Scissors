const Player = require('./player.js');
const autoPlayer = require('./autoPlayer.js');

class Battle {
    player;
    computer = new autoPlayer();
    computerWeapon = this.computer.autoPlayerTurn();

    constructor(name, weapon) {
        this.player = new Player(name, weapon)
    }

    result() {
        if (this.player.weapon === this.computerWeapon) {
            return "Oops, it's a tie!";
        }

        if (this.computerWeapon === "Rock") {
            return (this.player.weapon === "Paper") ? "Congrats, you win!" : "Sorry, you lose";
        }
        if (this.computerWeapon === "Paper") {
            return (this.player.weapon === "Scissors") ? "Congrats, you win!" : "Sorry, you lose";
        }
        if (this.computerWeapon === "Scissors") {
            return (this.player.weapon === "Rock") ? "Congrats, you win!" : "Sorry, you lose";
        }
    }
}

module.exports = Battle;