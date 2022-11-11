const jwt = require("jsonwebtoken");


const varifyToken = (req,res,next)=>{
    let authHeader = req.headers['token'];
    if(authHeader){
        jwt.verify(authHeader,'Token1234Token',(err,user)=>{
            if (err){
                res.status(401).send('Token invalid')
                console.log(err);
            }
            req.user=user;
            next()
        })

    }else{
        res.status(403).send('You are not authenticated')
    }
}


const adminAuth = (req,res,next)=>{
    varifyToken(req,res,()=>{
        console.log(req.user);
        if (req.user.role=="admin"){
            next()
        }else{
            res.status(403).send('You are not admin!')
        }
    })
}


module.exports = {adminAuth}