// test/test.js

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js'; // adjust path if needed

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
