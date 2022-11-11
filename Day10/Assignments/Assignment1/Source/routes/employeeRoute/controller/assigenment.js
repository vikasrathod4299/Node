const getAssignment = (req,res)=>{
    if(req.user){
        res.status(200).send(req.user.emp_assigenment)
    }else{
        res.status(404).send("Data not found!")
    }
}

module.exports = {getAssignment}