const chai = require('chai');
const chaiHttp = require('chai-http');
const Battle = require('../src/battle.js');

chai.use(chaiHttp);

describe('Testing the Battle class', () => {
    const testPlayer = new Battle("Jules", "Rock");

    describe('Testing that the name of the player has been correctly passed in', () => {
        it('should render "Jules"', () => {

            chai.expect(testPlayer.player.name).to.equal("Jules");
        });
    });

    describe('Testing that the weapon the player chose has been correctly passed in', () => {
        it('should render "Rock"', () => {

            chai.expect(testPlayer.player.weapon).to.equal("Rock");
        });
    });
});
