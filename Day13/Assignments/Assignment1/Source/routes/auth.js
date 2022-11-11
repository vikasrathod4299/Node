const jwt = require('jsonwebtoken');
const userModel = require('../Model/userModel');

const router = require('express').Router()

router.post('/login', async (req,res)=>{
    let {username,password} = req.body;

    let user = await userModel.findOne({username:username, password:password});
    if(user){
        accessToken = jwt.sign({_id:user._id,username,role:user.role},'Token1234Token')
        res.status(200).send({username,role:user.role,accessToken}) 
    }else{
        res.status(404).send('user not found!')
    }
})


router.post('/register', async (req,res)=>{
    let user = await userModel.findOne({username:req.body.username});
    if(!user){
        let data = new userModel(req.body);
        await data.save();
        res.status(200).send(data) 
    }else{
        res.status(404).send('user already exist!')
    }
})


module.exports = router;