const express = require('express')
require('dotenv').config()
const app = express()
const db = require('./db/db')
db()



const port  = 4003

app.get('/',(req,res)=>{
    res.send('deneme')
})


app.listen(port,()=>{
    console.log('guyel')
})

