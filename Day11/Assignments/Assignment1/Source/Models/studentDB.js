const mongoos = require('mongoose');

const studentSchema = mongoos.Schema({
    uid:{type: String, requiret:true},
    std_fees:{type : Number},
    std_result:{type : String }
})

module.exports = studentModel = mongoos.model('Student', studentSchema);

