const mongoos = require('mongoose');


const departmentSchema = mongoos.Schema({
    name:{type: String, required:true}  
})


module.exports = departmentModel = mongoos.model('Department', departmentSchema);