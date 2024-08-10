const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression());

app.get('/', (req, res) => {
  res.send('This response is compressed');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
