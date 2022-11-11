const jwt  = require("jsonwebtoken")
const studentModel = require('../../Models/studentDB')
const employeeModel = require('../../Models/employeDB')

const verifyToken = (req,res,next)=>{
    let authHeaders = req.headers['token']
    if(authHeaders){
        jwt.verify(authHeaders,'Token1234Token',(err,user)=>{
            if(err){
                res.status(404).send("Token invalid!")
            }else{
                req.user=user.user                
                next();
            }
        })
    }else{
        res.status(401).send("You are not Authenticated!")
    }
}

const stdAuth = async (req,res,next)=>{
    if(req.user.role=="std"){
        req.user = await studentModel.findOne({uid:req.user.uid}) 
        next()
    }else{
        res.status(404).send('You are not Authorised!')
    }
}

const empAuth = async (req,res,next)=>{
    if(req.user.role=="emp"){
        req.user = await employeeModel.findOne({uid:req.user.uid})         

        next()  
    }else{
        res.status(405).send('You are not Authorised!')
    }
}

module.exports = {verifyToken,stdAuth,empAuth};

