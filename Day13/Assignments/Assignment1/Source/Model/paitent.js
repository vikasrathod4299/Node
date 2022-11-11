const mongoos = require('mongoose');
const { modelName, schema } = require('./userModel');

const paitentSchema = mongoos.Schema({
    name:{type:String, required:true},
    departmentID:{type:mongoos.Schema.Types.ObjectId, ref:'Department'},
    madicine:{
        morning:[{drugId:{type:mongoos.Schema.Types.ObjectId, ref:'Drug'}}],
        afternoon:[{drugId:{type:mongoos.Schema.Types.ObjectId, ref:'Drug'}}],
        evening:[{drugId:{type:mongoos.Schema.Types.ObjectId, ref:'Drug'}}]
    },
    gender:{type:String, enum:['male', 'female']},
    age:{type:Number},
    docter:[{docId:{type:mongoos.Schema.Types.ObjectId, ref:'Docter'}}]
})

module.exports = paitentModel = mongoos.model('Paitent', paitentSchema)