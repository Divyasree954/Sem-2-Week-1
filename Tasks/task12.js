const express = require('express');
const app =express();
const PORT = 900;
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})