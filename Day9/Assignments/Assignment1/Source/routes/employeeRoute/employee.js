const router = require('express').Router()
const { empAuth } = require('../authentication/verifyToken');
const assignment = require('./controller/assigenment')


router.use(empAuth)
router.get('/assigenment',assignment.getAssignment)

module.exports = router;