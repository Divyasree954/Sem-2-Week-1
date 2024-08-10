const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  res.json({ message: 'Hello, JSON!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
