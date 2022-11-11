const router = require('express').Router()

const result = require('./controller/result')
const fees = require('./controller/fees')
const {stdAuth} = require('../authentication/verifyToken')

router.use(stdAuth)

router.get('/result',result.getResult)
router.post('/result',result.postResult)
router.put('/result',result.updateResult)
router.delete('/result',result.deleteResult)

router.get('/fees',fees.getFees)
router.post('/fees',fees.postFees)
router.put('/fees', fees.updateFees)
router.delete('/fees',fees.deleteFees)

module.exports = router;