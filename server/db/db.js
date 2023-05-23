const mongoose = require('mongoose')


const db = ()=>{

    mongoose.connect(process.env.MONGO_URL,{
       dbName:'duygu',
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
.then(()=>console.log('mongo'))
.catch((err)=>console.log(err))
} 

module.exports = db