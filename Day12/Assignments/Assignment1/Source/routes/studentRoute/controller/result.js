const studentModel = require('../../../Models/studentDB')
const getResult = (req,res)=>{
    if(req.stdData.std_result){
        
        res.status(200).send(req.stdData.std_result)
    }else{
        res.status(404).send("Data not found!")
    }
}

const postResult = async (req,res)=>{    
    let data = await studentModel.findOneAndUpdate({user:req.user.uid},{$set : {username:req.user.username,...req.body}},{upsert:true})
    res.status(200).send(data)
}

const deleteResult = async (req,res)=>{
    if(req.stdData){
        let data = await studentModel.findOneAndUpdate({uid:req.user.uid},{$unset:{std_result:""}})
        res.status(200).send(data)
    }else{
        res.status(404).send("Data not Found!")
    }
}

const updateResult = async (req,res)=>{
    if(req.stdData){
        let data = await studentModel.findOneAndUpdate({uid:req.user.uid},{std_result:req.body.std_result})
        res.status(200).send(data)
    }else{
        res.status(404).send("data not found")
    }
}

module.exports = {getResult, postResult, deleteResult, updateResult}
