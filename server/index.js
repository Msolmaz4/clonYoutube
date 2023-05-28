const express = require('express')
require('dotenv').config()
const app = express()
const db = require('./db/db')
db()
const cookie = require('cookie-parser')


//b odyparser yerine daha kolay olan app.use(express.json())
const bodyParser =require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())
app.use(cookie())
const userRoutes = require('./routes/users')
const videoRoutes =require('./routes/videos')
const commentsRoutes = require('./routes/comments')
const authRoutes = require('./routes/auth')
const port  = 4009



app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('./api/videos',videoRoutes)
app.use('./api/comments',commentsRoutes)

app.listen(port,()=>{
    console.log('guyel')
})

