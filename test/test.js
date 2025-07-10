import request from 'supertest';
import app from '../app.js';

describe('GET /', () => {
  let server;

  before((done) => {
    server = app.listen(0, done); // use random free port
  });

  after((done) => {
    server.close(done);
  });

  it('should return hello message', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Hello world!', done);
  });
});
