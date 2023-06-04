const router = require('express').Router()
const { addComment, deleteComment, getComments } = require('../controller/comment')
const{ verifyToken} = require('../verifyToken')


router.post('/',verifyToken,addComment)
router.delete('/:id',verifyToken,deleteComment)
router.get('/:videoId',getComments)








module.exports = router