import request from 'supertest';
import app from '../app.js';

describe('GET /', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/');
    if (res.text !== 'Hello, GitHub Actions!') {
      throw new Error('Response mismatch');
    }
  });
});
