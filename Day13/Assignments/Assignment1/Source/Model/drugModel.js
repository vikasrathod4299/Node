const mongoose = require('mongoose');

const drugSchema = mongoose.Schema({
    name:{type:String, require:true}
});

module.exports = drugModel = mongoose.model("Drug", drugSchema);
