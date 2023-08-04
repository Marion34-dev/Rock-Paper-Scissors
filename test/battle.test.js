const chai = require('chai');
const chaiHttp = require('chai-http');
const Session = require('../src/session.js');

chai.use(chaiHttp);

describe('Testing the Session class', () => {
    const testPlayer = new Session("Jules", "Rock");

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
