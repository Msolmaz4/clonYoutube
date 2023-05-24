const express = require('express')
require('dotenv').config()
const app = express()
const db = require('./db/db')
db()

const userRoutes = require('./routes/users')
const port  = 4003

app.get('/',(req,res)=>{
    res.send('deneme')
})

app.use('/api/users',userRoutes)

app.listen(port,()=>{
    console.log('guyel')
})

