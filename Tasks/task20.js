// server.js
const express = require('express');
const app = express();

// Modularized routes in the same file
const router = express.Router();

router.get('/profile', (req, res) => {
  res.send('User profile');
});

// Use the routes
app.use('/user', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
