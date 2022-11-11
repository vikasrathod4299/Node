const jwt = require('jsonwebtoken')


const verifyToken = (req,res,next)=>{
    token = req.headers['token']
    if(token){
        jwt.verify(token,process.env.jwt_token,(err,user)=>{
            if(!err){
                req.user = user
                next()
            }else{
                res.status(403).send("Token is not valid")
                next()
            }
        })
    }else{
        res.status(404).send("You are not authenticated")
        next()
    }
}

const adminAutherisation = (req,res,next)=>{
        console.log(req.user.role)
        if(req.user.role=="admin"){
            next()
        }else{
            res.status(403).send("You are not admin")
        }    
}

const devAutherisation = (req,res,next)=>{
    if(req.user.role=="dev" || req.user.role=="admin"){
        next()
    }else{
        res.status(403).send("You are not admin")
    }    
}


module.exports ={verifyToken,adminAutherisation, devAutherisation}