const express = require('express');
const app =express();
const PORT = 9000;
app.use(express.json());
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ID: ${id}`);
  });  
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})