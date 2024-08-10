const express = require('express');
const app =express();
const PORT = 5000;
app.use(express.json());
app.get('/greet', (req, res) => {
    const name = req.query.name || 'everyone';
    res.send(`Hello, ${name}!`);
  });
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})