const router = require('express').Router()
const result = require('./controller/result')
const fees = require('./controller/fees')
const {stdAuth} = require('../authentication/verifyToken')

router.use(stdAuth)
router.get('/result',result.getResult)
router.get('/fees',fees.getRFees)

module.exports = router;