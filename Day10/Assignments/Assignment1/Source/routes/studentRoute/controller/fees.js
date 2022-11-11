const getFees = (req,res)=>{
    if(req.user){
        res.status(200).json(req.user.std_fees)
    }else{
        res.status(404).json("Data not found!")
    }
}

module.exports = {getFees}