const express = require('express');
const app =express();
const PORT = 9000;
app.use(express.json());
app.delete('/delete', (req, res) => {
    const id = req.params.id;
    res.send(`Deleted item with ID: ${id}`);
  });  
//run over server
app.listen(PORT,()=>{
    console.log(`Server is running in port : ${PORT}`)
})