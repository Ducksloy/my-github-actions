import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

let server;

if (process.env.NODE_ENV !== 'test') {
  server = app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}

export default app;
