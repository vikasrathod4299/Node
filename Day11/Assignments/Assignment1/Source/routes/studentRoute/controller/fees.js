const studentModel = require("../../../Models/studentDB")

const getFees = (req,res)=>{
    if(req.stdData){
        res.status(200).json(req.stdData.std_fees)
    }else{
        res.status(404).json("Data not found!")
    }
}


const postFees = async (req,res)=>{    
    let data =  await studentModel.findOneAndUpdate({uid:req.user.uid}, {$set : {std_fees:req.body.std_fees}}, {upsert:true, new:true})
    res.status(200).send(data)
}


const deleteFees = async (req,res)=>{
    if(req.stdData){
        let data = await studentModel.findOneAndUpdate({uid:req.user.uid},{$unset:{std_fees:""}})
        res.status(200).send(data)
    }else{
        res.status(404).send("Data not Found!")
    }
}

const updateFees = async (req,res)=>{
    if(req.stdData){
        console.log('here');
        let data = await studentModel.findOneAndUpdate({uid:req.user.uid},{std_fees:req.body.std_fees})
        res.status(200).send(data)
    }else{
        res.status(404).send("data not found")
    }
}
module.exports = {getFees, postFees, deleteFees, updateFees}