const express = require('express');
const app =express();
const PORT = 3000;
app.use(express.json());
//API
app.get('/',(req,res)=>{
    res.send("Good Byee....");
})
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})