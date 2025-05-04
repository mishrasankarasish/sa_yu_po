const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello MCKV');
});

app.get('/courses', (req, res) => {
  res.json([
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Computer Science' },
    { id: 3, name: 'Electronics' }
  ]);
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
