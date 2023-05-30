

const jwt = require('jsonwebtoken')

exports.verifyToken = (req,res,next)=>{
    console.log(req.cookies.acces_token)
    const token = req.cookies.acces_token
    console.log(token,"verify")
    if(!token) return res.send('verif ist nicht token')
    jwt.verify(token,process.env.AUTH_KEY,(err,email)=>{
       if(err) return res.send('deneme111111')
       req.email = email
   
       next()
    })




   

}


{/**basit yollu buda oluyor
burad jwt icindeki foksiyondan emein degilim didinda olabilr
   
    try{
        const {token} =req.headers
        jwt.verify(token,process.env.AUTH_SEC_KEY,(err,decoded)=>{
         if(err) return res.status(403).send('baba zokuy')
        req.token = token
        })
       
        next()
    }
    catch(err){
        res.send
    }


*/}