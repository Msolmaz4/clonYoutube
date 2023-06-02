const { addVideo } = require('../controller/video')
const { verifyToken } = require('../verifyToken')

const router = require('express').Router()

router.post('/',verifyToken,addVideo)
router.put('/:id',verifyToken,addVideo)
router.delete('/:id',verifyToken,addVideo)
router.get('/find/:id',addVideo)
//video yu izledimi artirmak icin 
router.put('/view/:id',addVideo)

module.exports = router