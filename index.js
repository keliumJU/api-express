const base = require('./base.js');
require('dotenv').config()
const express = require('express');

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/base', (req, res) => {
  let greeting = base();
  res.send(greeting)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
