const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const docterModel = require('../Model/docterModel')
const userModel = require('../Model/userModel');
const {adminAuth} = require('../middlewares/varifyToken');


router.use(adminAuth)

router.post('/add' , async (req,res)=>{
    let docter = await userModel.findOne({username:req.body.username});
    if(docter && docter.role=="docter"){
        isExists = await docterModel.findOne({name:req.body.name})
        if(!isExists){
            req.body.departmentID = mongoose.Types.ObjectId(req.body.departmentID);
            try{
                let data = new docterModel(req.body)
                await data.save();
                res.status(200).send(data)
            }catch(e){
                res.status(404).send(e)
            }
        }else{
            res.status(404).send("Docter already exists!")
        }
    }else{
        res.status(404).send('User not found!')
    }
})

router.post('/:id/update' , async (req,res)=>{
    let id = req.params.id;

    try{
        let data = await docterModel.findByIdAndUpdate(id, req.body)
        res.status(200).send(data)
    }catch(e){
        res.status(404).send(e)
    }
 })
 
 module.exports = router;