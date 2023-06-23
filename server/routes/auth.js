const router = require('express').Router()

const {signup,signin, googleAuth} = require('../controller/auth')


//register
router.post('/signup',signup)


//login
router.post('/signin',signin)

//google

router.post('/google',googleAuth)



module.exports = router