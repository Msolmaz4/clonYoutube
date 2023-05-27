

const jwt = require('jsonwebtoken')

exports.verifyToken = (req,res,next)=>{
    const {token }= req.cookies.acces_token
    console.log(token)

   if(!token)  return res.send('cverify ist leerr')
   jwt.verify(token,process.env.AUTH_KEY,(err,decoded)=>
   {
    if(err) return res.send('verif token verify')
   req.token = token
   }
   )
   


    next()
}