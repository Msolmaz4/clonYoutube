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


exports.deleteUser = (req,res,next)=>{

}

exports.getUser= (req,res,next)=>{

}

exports.subscribe = (req,res,next)=>{

}

exports.unsubscribe = (req,res,next)=>{

}
exports.like = (req,res,next)=>{

}
exports.dislike = (req,res,next)=>{

}




