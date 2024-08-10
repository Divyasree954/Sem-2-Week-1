const express = require('express');
const app = express();

app.get('/unauthorized', (req, res) => {
  res.status(401).send('Unauthorized access');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
