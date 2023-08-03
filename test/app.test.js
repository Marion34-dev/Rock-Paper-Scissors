const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js');

chai.use(chaiHttp);

describe('Testing the requests made to the app', () => {

    const testServer = chai.request(app).keepOpen();

    describe('Testing the get request of the index route', () => {
        it('should display the index.ejs page', async () => {
            const res = await testServer
                .get(`/`)
                .send();
            
            chai.expect(res).to.have.status(200);
            chai.expect(res.text).to.contain("Hi there! Welcome to the Rock Paper Scissors Challenge")
            chai.expect(res).to.be.html;
        });
    });
    
    describe('Testing the get request of the game route', () => {
        it('should display the game.ejs page', async () => {
            const res = await testServer
                .get(`/game`)
                .send();

            chai.expect(res).to.have.status(200);
            chai.expect(res.text).to.contain("choose wisely!")
            chai.expect(res).to.be.html;
        });
    });

    describe('Testing the post request of the result route', () => {
        it('should display the result.ejs page', async () => {
            const res = await testServer
                .post(`/result`)
                .send();
                
            chai.expect(res).to.have.status(200);
            chai.expect(res.text).to.contain("Your opponent chose:")
            chai.expect(res).to.be.html;
        });
    });
});
