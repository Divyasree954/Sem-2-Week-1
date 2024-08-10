const express = require('express');
const app =express();
const PORT = 30;
app.use(express.json());
//API
app.get('/json', (req, res) => {
    res.json({ message: 'Hello, world!' });
  });
  
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})