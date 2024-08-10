const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Rate limiting is enabled');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
