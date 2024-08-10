const express = require('express');
const app =express();
const PORT = 600;
app.use(express.json());
app.put('/update', (req, res) => {
    const data = req.body;
    res.send('Data updated');
  });   
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})