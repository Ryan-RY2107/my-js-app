// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello CI/CD World!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
app.get('/about', (req, res) => {
    res.send('This is the about page.');
  });
  app.get('/about', (req, res) => {
    res.send('This is the about page.');
  });
  