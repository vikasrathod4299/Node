const getResult = (req,res)=>{
    if(req.user){
        res.status(200).send(req.user.std_result)
    }else{
        res.status(404).send("Data not found!")
    }

}

module.exports = {getResult}