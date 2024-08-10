const express = require('express');
const app =express();
const PORT = 3000;
app.use(express.json());
app.post('/echo',(req,res)=>{
    const data = req.body;
    console.log(data);
    res.send("echo")
})
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})
