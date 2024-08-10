const express = require('express');
const app =express();
const PORT = 6000;
app.use(express.json());
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
  });
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})