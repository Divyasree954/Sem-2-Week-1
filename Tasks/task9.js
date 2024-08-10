const express = require('express');
const app =express();
const PORT = 6000;
app.use(express.json());
app.post('/json-data', (req, res) => {
    const data = req.body;
    res.json({ received: data });
  });  
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})