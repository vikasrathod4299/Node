const mongoos = require('mongoose');

const userSchema = mongoos.Schema({
    username:{type : String , require:true, unique:true},
    password:{type : String , require:true},
    name:{type : String , require:true},
    role:{type : String , require:true}
})


module.exports = userModel = mongoos.model('User', userSchema)