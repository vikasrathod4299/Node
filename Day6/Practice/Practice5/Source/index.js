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


app.delete("/customers/:id",(req, res) => {
  let exists = customers.find((item)=>item.id==req.params.id)
  
  if(exists){
    customers.splice(customers.indexOf(exists),1)
    console.log(customers)
    res.status(200).send(` ${exists.name} deleted!`)
  }else{
    res.status(404).send("User dose not exists!")
  }

});




app.listen(3000,()=>{
    console.log("It's alive on port 3000")
})