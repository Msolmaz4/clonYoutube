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

//kullaniciyi bulacam find/:id
exports.getUser= async(req,res,next)=>{

    const email = await Users.findById(req.email.id)
    res.status(200).json(email)


}
//buraqda id bulduk paramsadaki id push ederek takipciyi ekledik
exports.subscribe = async (req,res,next)=>{
    console.log(req.email.id)
    try {
        await Users.findByIdAndUpdate(req.email.id,{
            $push :{subscribedUsers:req.params.id}

        })
        await Users.findByIdAndUpdate(req.params.id),{
            $inc :{subscribers:1}
        }
        res.status(200).json('subription okeeeeeee')
    } catch (error) {
        console.log(error)
    }

}

exports.unsubscribe = async(req,res,next)=>{

    try {
        await Users.findByIdAndUpdate(req.email.id,{
            $pull :{subscribedUsers:req.params.id}

        })
        await Users.findByIdAndUpdate(req.params.id),{
            $inc :{subscribers:-1}
        }
        res.status(200).json('unsubription okeeeeeee')
    } catch (error) {
        console.log(error)
    }



}
exports.like = (req,res,next)=>{

}
exports.dislike = (req,res,next)=>{

}




