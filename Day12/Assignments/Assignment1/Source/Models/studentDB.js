const { default: mongoose } = require('mongoose');
const mongoos = require('mongoose');
const userModel = require('../Models/userDB')
const studentSchema = mongoos.Schema({
    user:{type: mongoose.Schema.Types.ObjectId , requiret:true, ref:'User'},
    username:{type:String},
    std_fees:{type : Number},
    std_result:{type : String }
})

module.exports = studentModel = mongoos.model('Student', studentSchema);

