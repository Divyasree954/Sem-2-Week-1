const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  res.send(`Received name: ${req.body.name}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
