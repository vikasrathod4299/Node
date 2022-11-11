// const engine = require("consolidate");
require('dotenv').config() 
const express = require("express");
const app = express();
app.disable('x-powered-by');
const jwt = require('jsonwebtoken');

app.use(express.json())

app.get('/',(req,res)=>{
  res.status(200).send("welcome")
})

app.post('/register',(req,res)=>{
  let {uname,pass} = req.body
  let jwtoken = jwt.sign({uname,pass},process.env.jwt_token,{expiresIn:'31m'}) 
  res.status(200).send({user:{uname,pass},token:jwtoken})
})


app.post('/login',(req,res)=>{
  let accessToken = req.headers['token']
  
  jwt.verify(accessToken,process.env.jwt_token,(err,user)=>{
    if(err)
    {
      res.status(402).send("not authorised!")
    }
    else{
      res.status(200).send(`Hello ${user.uname}`)
    }
  })
})

app.listen(3000, () => {
  console.log("Alive");
});













// app.engine("html", engine.mustache);
// app.set("view-engine", "html");
// app.use(express.static(__dirname + "/public"));