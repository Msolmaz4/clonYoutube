const express =require('express')
 const router = express.Router()
 const test = require('../controller/user.js')


 router.get('/test',test)




module.exports = router