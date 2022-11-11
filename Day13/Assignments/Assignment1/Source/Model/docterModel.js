const mongoos = require('mongoose')

let docterSchema = new mongoos.Schema({
    name:{type:String, required:true},
    departmentID:[{ type: mongoos.Schema.Types.ObjectId, ref:'Department'}],
})

module.exports = docterModel = mongoos.model('Docter', docterSchema);

