const express = require('express');
const app =express();
const PORT = 9;
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  }); 
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})