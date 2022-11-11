const mongoos = require('mongoose');

const userSchema = mongoos.Schema({
    username:{type: String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String}
})

module.exports = userModel = mongoos.model('User',userSchema)