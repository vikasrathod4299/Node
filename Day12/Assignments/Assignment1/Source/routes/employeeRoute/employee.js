const router = require('express').Router()
const { empAuth } = require('../authentication/verifyToken');
const assignment = require('./controller/assigenment')


router.use(empAuth)

router.get('/assigenment',assignment.getAssignment)
router.post('/assigenment',assignment.postAssigenment)
router.put('/assigenment',assignment.updateAssignment)
router.delete('/assigenment',assignment.deleteAssigenment)

module.exports = router;