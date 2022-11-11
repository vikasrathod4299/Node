const express = require('express')
const joi = require('joi')
const app = express();  
app.disable('x-powered-by');


// let data = [{emp_id:1,emp_name:"vikas", emp_city:"amd"},
//             {emp_id:2,emp_name:"bhargav", emp_city:"gandhinagar"},
//             {emp_id:3,emp_name:"ruchit", emp_city:"himmatnagar"},
//             {emp_id:4,emp_name:"umang", emp_city:"surat"},
//             {emp_id:5,emp_name:"ravi", emp_city:"vapi"},
//             {emp_id:6,emp_name:"harshit", emp_city:"unjha"},
//             {emp_id:7,emp_name:"sufiyan", emp_city:"daanta"}
//         ]

const valdation = (req,res,next)=>{
    let data = req.body
    if(Object.keys(req.body).length==2 && typeof data.emp_id==='number' && typeof data.emp_name==='string' && typeof data.amd==='string')
    {
        data.push(req.body)
        next()
    }else{
        res.status(404).send("Datais not valid")
    }
}   

let data = new joi.Object({
AddressLine1: Joi.string(),
AddressLine2:Joi.string(),
AddressLine3: Joi.string(),
  assignments: Joi.array().items(Joi.string()),
  CitizenshipId: Joi.number().integer(),
  CitizenshipLegislationCode: Joi.string(),
  CitizenshipStatus: Joi.string(),
  CitizenshipToDate: Joi.date(),
  City: Joi.string(),
  CorrespondenceLanguage: Joi.string(),
  Country: Joi.string(),
  CreationDate: Joi.date().timestamp(),
  DateOfBirth: Joi.date(),
  directReports: Joi.array().items(Joi.string()),
  DisplayName: Joi.string(),
  DriversLicenseExpirationDate: Joi.date(),
  DriversLicenseId: Joi.number().integer(),
  DriversLicenseIssuingCountry: Joi.string(),
  EffectiveStartDate: Joi.date(),
  Ethnicity: Joi.string(),
  FirstName: Joi.string(),
  Gender: Joi.string(),
HireDate: Joi.date(),
  HomeFaxAreaCode: Joi.string(),
  HomeFaxCountryCode: Joi.string(),
  HomeFaxExtension: Joi.string(),
  HomeFaxLegislationCode: Joi.string(),
  HomeFaxNumber: Joi.string(),
  HomePhoneAreaCode: Joi.string(),
  HomePhoneCountryCode: Joi.string(),
  HomePhoneExtension: Joi.string(),
  HomePhoneLegislationCode: Joi.string(),
  HomePhoneNumber: Joi.string(),
  Honors: Joi.string(),
  LastName: Joi.string(),
  LastUpdateDate: Joi.date().timestamp(),
  LegalEntityId: Joi.number().integer(),
  LicenseNumber: Joi.string(),
  links: Joi.array().items(Joi.string()),
  MaritalStatus: Joi.string(),
  MiddleName: Joi.string(),
  MilitaryVetStatus: Joi.string(),
  NameSuffix: Joi.string(),
  NationalId: Joi.string(),
  NationalIdCountry: Joi.string(),
})


app.get("/emps",(req,res)=>{
    res.status(200).send(data)
})

app.get('/emps/:id',(req,res)=>{
    res.status(200).send(data.find((item)=>item.emp_id==req.params.id))
})

app.post('/emps/add', valdation,(req,res)=>{
    data.push(res.body)
})

app.listen(3000,()=>{
    console.log("Alive on post 3000");
})

