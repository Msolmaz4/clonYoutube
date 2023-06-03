const { addVideo, trend, random, sub, addView } = require('../controller/video')
const { verifyToken } = require('../verifyToken')

const router = require('express').Router()

router.post('/',verifyToken,addVideo)
router.put('/:id',verifyToken,addVideo)
router.delete('/:id',verifyToken,addVideo)
router.get('/find/:id',addVideo)
router.put('/view/:id',addView)
//video yu izledimi artirmak icin 
router.put('/trend',trend)
router.get('/random',random)
//uye oldumuy sayfalerin videolari
router.get('/sub',verifyToken,sub)

module.exports = router