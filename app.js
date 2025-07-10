// app.js
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions!');
});

// ✅ Only start the server if app.js is run directly (not imported)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.argv[1] === __filename) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export default app;
