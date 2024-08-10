// server.jsi
require('dotenv').config();// Load envronment variables from a .env file
const express = require('express');
const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
