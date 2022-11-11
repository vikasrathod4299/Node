const router = require('express').Router()
const jwt = require('jsonwebtoken')
const {db}  = require ('../db')


router.post("/login",(req,res)=>{
    let {username,password} = req.body
    let user = db.find((user)=>user.username==username && user.password==password)
    if(user){
        let accesstoken = jwt.sign(user,process.env.jwt_token)
        res.status(200).send({user:{...user},token:accesstoken})
    }
    else{
        res.status(404).send("Wrond Credentials!")
    }
})


router.post("/register",(req,res)=>{
    let user = res.body
    let isExists = db.find((user)=>user.username==username)
    if(!isExists){
        db.push(user)
        res.status(200).send(`${user.full_name} is registerd!`)
    }
    else{
        res.status(404).send("User already exists!")
    }
})

module.exports = router