// src/server.ts
import express from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('hello from 8000');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

