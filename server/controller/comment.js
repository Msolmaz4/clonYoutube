
const Comment = require('../models/Comment')
const Video = require('../models/Video')

exports.addComment = async (req,res)=>{

     const newComment = new Comment({...req.body,userId:req.email.id})
    try {

        const savedComment = await newComment.save()
        
        res.status(200).json(savedComment)
    } catch (error) {
        
        console.log(error)
    }
}

exports.deleteComment = async (req,res)=>{
    try {
        const comment = await Comment.findById(res.params.id)
        const video = await Video.findById(res.params.id)
        if(req.email.id === comment.userId || req.email.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json('comment delete')

        }else{
            res.status(403).json({
                mesage:'deletecomment falsch'
            })
        }
    } catch (error) {

        
        console.log(error)
    }
}


exports.getComments = async (req,res)=>{
    try {
        const comments = await Comment.find({videoId:req.params.videoId})
        res.status(200).json(comments)
    } catch (error) {
        
        console.log(error)
    }
}