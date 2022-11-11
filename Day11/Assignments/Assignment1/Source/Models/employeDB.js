
const mongoos = require('mongoose');

const employeeSchema = mongoos.Schema({
    uid:{type: String, requiret:true, unique:true},
    emp_assigenment:{ title:{type : String,  require:true} , status:{type : String,  require:true}}
})

module.exports = employeeModel = mongoos.model('Employee', employeeSchema);


