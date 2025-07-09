// test/test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app/app'); // or '../app.js' depending on your structure

const assert = chai.assert;
chai.use(chaiHttp);

describe('GET /', function () {
  it('should return hello message', function (done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        assert.equal(res.text, 'Hello, GitHub Actions!');
        done();
      });
  });
});

