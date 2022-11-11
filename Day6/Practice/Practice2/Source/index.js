const express = require("express");
const app = express();
app.disable('x-powered-by');

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

app.get("/customers/:id", (req, res) => {
  let id = req.params.id
  res.status(200).json(customers.find((item)=> item.id==id));
});


app.listen(3000,()=>{
    console.log("It's alive on port 3000")
})