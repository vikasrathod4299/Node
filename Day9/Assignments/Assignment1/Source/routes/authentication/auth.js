const router = require('express').Router()
const jwt = require('jsonwebtoken')
const userModel = require('../../Models/userDB')  

router.post('/login', async(req,res)=>{
    let {username, password} = req.body;
    console.log(username,password)
    let user = await userModel.findOne({username:username, password:password})
    if(user){
        let {_id,username,role} = user;
        let uid=_id.valueOf()
        let accessToken = jwt.sign({user:{uid,username,role}},"Token1234Token")
        res.status(200).send({user:{uid,username,role},accessToken})
    }
    else{
        res.status(404).send('Wrond credentials!')
    }
})


module.exports = router;



// router.post('/register', async(req,res)=>{
//     let data = req.body;

//     if(data && Object.keys(data).length==4){
        
//     }else{  

//     }

// })