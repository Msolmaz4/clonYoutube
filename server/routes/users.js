const express =require('express')
const { update, deleteUser, getUser, subscribe, unsubscribe, like, dislike } = require('../controller/user')
const { verifyToken } = require('../verifyToken')
 const router = express.Router()
 
//update
router.put('/:id',verifyToken,update)

//delete user
router.delete('/:id',deleteUser)

//get a user

router.get('/find/:id',getUser)


//subscribe a iuser
router.put('/sub/:id',subscribe)



//unsubscribe a user

router.put('/unsub/:id',unsubscribe)


//like a video


router.put('/like/:videoId',like)
//dislike a video
router.put('/dislike/:videoId',dislike)











module.exports = router