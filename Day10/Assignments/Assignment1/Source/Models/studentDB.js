const mongoos = require('mongoose');

const studentSchema = mongoos.Schema({
    uid:{type: String, requiret:true, unique:true},
    std_fees:{type : Number , require:true},
    std_result:{type : String , require:true}
})

module.exports = studentModel = mongoos.model('Student', studentSchema);

