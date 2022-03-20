const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Response sended')
})
app.listen(PORT,()=>{
    console.log('App running at port' + PORT);
})