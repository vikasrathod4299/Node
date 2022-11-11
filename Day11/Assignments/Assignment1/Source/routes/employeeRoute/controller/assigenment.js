const employeeModel = require('../../../Models/employeDB')

const getAssignment = (req,res)=>{
    if(req.empData){
        console.log(req.empData);
        res.status(200).send(req.empData.emp_assigenment)
    }else{
        res.status(404).send("Data not found!")
    }
}

const postAssigenment = async (req,res)=>{
    let data = employeeModel.findOneAndUpdate({uid:req.user.uid},{$set:{emp_assigenment:req.body.emp_assigenment}})
    res.status(200).send(data)
}

const deleteAssigenment = async (req,res) =>{
    if(req.empData.emp_assigenment){
        let data = await employeeModel.findOneAndUpdate({uid:req.user.uid},{$unset:{emp_assigenment:""}})
        res.status(200).send(data)
    }else{
        res.status(404).send('Data ont found!')
    }
}

const updateAssignment = async (req,res) =>{
    if(req.empData){
        let data = await employeeModel.findOneAndUpdate({uid:req.user.uid},{$set:{emp_assigenment:req.body.emp_assigenment}})
        res.status(200).send(data)
    }else{
        res.status(404).send('Data ont found!')
    }
}

module.exports = {getAssignment,updateAssignment, deleteAssigenment, postAssigenment}