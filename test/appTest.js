const chai = require("chai");
const {expect} = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app");

describe("Node app", () => {
    it ("App should respond with status 200", (done) => {
        chai.request(app).get("/").end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });
});