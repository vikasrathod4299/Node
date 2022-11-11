const express =  require('express')
const app = express();
app.disable('x-powered-by');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let data =[  
      {
       "ID":1,
       "Name":"Reena",
       "Address":"Ahmedabad",
       "Fees":{
          "Amount":10000,
          "PaymentDate":"12/12/2020",
          "Status":true
       },
       "Result":{
          "Hindi":80,
          "Eng":70,
          "Math":60,
          "Total":210,
          "Grade":"A"
       }
    },
    {
       "ID":2,
       "Name":"Rita",
       "Address":"Surat",
       "Fees":{
          "Amount":12000,
          "PaymentDate":"12/12/2020",
          "Status":false
       },
       "Result":{
          "Hindi":80,
          "Eng":70,
          "Math":60,
          "Total":210,
          "Grade":"A"
       }
    }
 ]
 
 app.get('/students', (req,res)=>{
    res.status(200).json(data)
 })

 app.get("/students/:id",(req,res)=>{
    let std = data.find((item)=>item.ID == req.params.id);
    res.status(200).json(std)
 })
 
 app.get("/students/:id/fees",(req,res)=>{
   let std = data.find((item)=>item.ID == req.params.id);
   res.status(200).send(std.Fees.Amount)
})

app.get("/students/:id/result",(req,res)=>{
   let std = data.find((item)=>item.ID == req.params.id);
   res.status(200).json(std.Result)
})



app.listen(3001)