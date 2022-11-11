const express = require("express");
const app = express();
app.disable('x-powered-by');
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const customers = [
  {
    id: 1,
    name: "umang Panchal",
  },
  {
    id: 2,
    name: "sadariya ravi",
  },
  {
    id: 3,
    name: "ruchit patel",
  },
  {
    id: 4,
    name: "bhargav solanki",
  },
  {
    id: 5,
    name: "vikas rathod",
  },
];


let verifyData = (req,res,next)=>{
  if (Object.keys(req.body).length==0)
  {
    res.status(404).send("User data not founded!")
  }else{
    next()
  } 
  
}


app.put("/customers/:id", verifyData ,(req, res) => {

  let exists = customers.find((item)=>item.id==req.params.id)
  if(exists){
    console.log(exists)
    exists=req.body.name
    console.log(exists)
    console.log(customers)
    res.status(200).send("Data Updated!")
  }else{
    res.status(404).send("Data dose not exists!")
  }
});




app.listen(3001,()=>{
    console.log("It's alive on port 3000")
})