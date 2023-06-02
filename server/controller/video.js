
const Video = require('../models/Video')

exports.addVideo = async (req,res,next)=>{
    const newVideo = new Video({userId :req.email.id, ...req.body})
    try {
        const saveVideo = await newVideo.save()
        res.status(200).json(saveVideo)
    } catch (error) {
        console.log(error)
        
    }

}

exports.updateVideo = async (req,res,next)=>{
    try {
        const video = await Video.findById(req.params.id)
        if(!video) return  res.send.json({message:'update video nichts '})
        if(req.email.id === video.userId){
            const updateVideo = await Video.findByIdAndUpdate(req.params.id,
           {
                $set:req.body
            },
            {
                new:true
            }
            )
        }
        res.status(200).json(updateVideo)

    } catch (error) {
        
    }
    
}

exports.deleteVideo = async (req,res,next)=>{
    
}

exports.getVideo = async (req,res,next)=>{
    
}