const router = require('express').Router()
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const userModel = require('../../Models/userDB')  

router.post('/login', async(req,res)=>{
    let {username, password} = req.body;
    let user = await userModel.findOne({username:username, password:password})
    if(user){
        let {_id:uid,username,role} = user;
        let accessToken = jwt.sign({uid,username,role},"Token1234Token")
        res.status(200).send({user:{uid,username,role},accessToken})
    }
    else{
        res.status(404).send('Wrond credentials!')
    }
})


router.post('/register', async(req,res)=>{

    if(req.body && Object.keys(req.body).length==4){
        try{
            let data = await userModel.insertMany(req.body)
            res.status(200).send(data)
        }catch(e){
            console.log(e);
            res.send(e)
        }
    }else{  
        res.status(404).send("Enter proper data!")
    }

})

module.exports = router;
