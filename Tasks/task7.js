const express = require('express');
const app =express();
const PORT = 300;
app.use(express.json());
app.use(express.static('public'));
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})