const { json } = require("body-parser")
const Users = require("../models/User")

exports.update =async  (req,res,next)=>{
    //res.send('baba geldik')
      const {id} = req.params
      console.log(id,'update')

    if(req.params.id === req.email.id){
        try {
            const updateUser = await Users.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {
                new:true
            }
            )
            res.status(200).json(updateUser)
            
        } catch (error) {
            console.log(error)
            
        }

    }else{
        console.log('verify ist nict rein')
    }

}


exports.deleteUser =async (req,res,next)=>{

    if(req.params.id === req.email.id){
        try {
            const deleteUser = await Users.findByIdAndDelete(req.params.id)
            res.status(200).json({
                mesaage:"dletee okey",
                deleteUser
            })
            
        } catch (error) {
            console.log(error)
            
        }

    }else{
        console.log('verify ist nict rein')
    }

}

exports.getUser= async(req,res,next)=>{

    const email = await Users.findById(req.email.id)
    res.status(200).json(email)


}

exports.subscribe = async (req,res,next)=>{
    try {
        
    } catch (error) {
        
    }

}

exports.unsubscribe = (req,res,next)=>{

}
exports.like = (req,res,next)=>{

}
exports.dislike = (req,res,next)=>{

}




