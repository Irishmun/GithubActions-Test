const express = require('express')
const facebookRouter = require('./facebook')

const router = express.Router()

router.use('/facebook', facebookRouter)

module.exports = router