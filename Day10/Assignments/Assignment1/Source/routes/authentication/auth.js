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


router.post('/register', async(req,res)=>{

    if(req.body && Object.keys(req.body).length==4){
        try{
            let data = await userModel.insertMany(req.body)
            res.status(200).send(data)
        }catch(e){c
            console.log(e);
            res.send(e)
        }
    }else{  
        res.status(404).send("Enter proper data!")
    }

})

module.exports = router;
